# frozen_string_literal: true

#
# :quickLinks filter
#
# Replaces this:
#
#    quick{ content }
#
# With a "foo" admonition. The content can be spread across multiple lines.
#
Nanoc::Filter.define(:quickLinks) do |content, _params|
  content.gsub(/^quick\{([^\}]+)\}/m) do |_match|
    m = Regexp.last_match
    stripped = m[1].strip
    "<nav class=\"quick-links\" markdown=\"1\">\n#{stripped}\n</nav>\n"
  end
end
