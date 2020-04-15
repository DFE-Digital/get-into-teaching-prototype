# frozen_string_literal: true

#
# :internalLink filter
#
# Replaces this:
#
#    [text](url, "internal")
#
# With a "foo" admonition. The content can be spread across multiple lines.
#
Nanoc::Filter.define(:internalLink) do |content, _params|
  content.gsub(/^\[([^\]]+)\]\(([^\s]+)\s"internal"\)/m) do |_match|
    m = Regexp.last_match
    "<a href=\"#{m[2]}\" class=\"internal\">#{m[1]} <span class=\"arrow\">></span></a>"
  end
end
