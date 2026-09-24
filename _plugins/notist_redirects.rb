# frozen_string_literal: true

require 'cgi'
require 'uri'

module Jekyll
  # Keeps old Notist links working after the domain moves to this site.
  #
  # Migrated talks carry `<!-- Source: https://<notist-host>/<id>/<slug> -->`.
  # For each one this writes a redirect page at /<id>/<slug>/ and /<id>/
  # pointing to the talk's new URL, plus redirects for Notist's
  # profile pages (/presentations, /bio, /videos).
  class NotistRedirectPage < PageWithoutAFile
    def initialize(site, path, target_url)
      super(site, site.source, path, 'index.html')
      self.data = { 'layout' => nil, 'sitemap' => false }
      target = CGI.escapeHTML(target_url)
      self.content = <<~HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Redirecting…</title>
          <link rel="canonical" href="#{target}">
          <meta name="robots" content="noindex">
          <meta http-equiv="refresh" content="0; url=#{target}">
        </head>
        <body>
          <p>This talk has moved: <a href="#{target}">#{target}</a></p>
        </body>
        </html>
      HTML
    end
  end

  class NotistRedirects < Generator
    safe true
    priority :low

    SOURCE_PATTERN = %r{<!--\s*Source:\s*(https?://\S+?)\s*-->}
    NOTIST_PATH = %r{\A/([A-Za-z0-9]{6})/([\w-]+)/?\z}
    PROFILE_PATHS = %w[presentations bio videos].freeze

    def generate(site)
      talks = site.collections['talks']
      return unless talks

      talks.docs.each do |doc|
        match = doc.content.to_s.match(SOURCE_PATTERN)
        next unless match

        path = URI.parse(match[1]).path
        parts = path.match(NOTIST_PATH)
        next unless parts

        target = site.baseurl.to_s + doc.url
        add(site, "#{parts[1]}/#{parts[2]}", target)
        add(site, parts[1], target)
      end

      PROFILE_PATHS.each { |path| add(site, path, "#{site.baseurl}/") }
    rescue URI::InvalidURIError => e
      Jekyll.logger.warn 'NotistRedirects:', e.message
    end

    private

    def add(site, dir, target)
      # Never shadow a real page
      return if site.pages.any? { |page| page.dir.delete_prefix('/').chomp('/') == dir }

      site.pages << NotistRedirectPage.new(site, dir, target)
    end
  end
end
