# frozen_string_literal: true

#
# :externalLink filter
#
# Replaces this:
#
#    [text](url, "external")
#
# With a "foo" admonition. The content can be spread across multiple lines.
#
Nanoc::Filter.define(:externalLink) do |content, _params|
  content.gsub(/^\[([^\]]+)\]\(([^\s]+)\s"external"\)/m) do |_match|
    m = Regexp.last_match
    "<a href=\"#{m[2]}\" class=\"external\" target=\"_blank\">#{m[1]}</a>"
  end
end
