# frozen_string_literal: true

#
# :externalInlineLink filter
#
# Replaces this:
#
#    [text](url, "external-inline")
#
# With a "foo" admonition. The content can be spread across multiple lines.
#
Nanoc::Filter.define(:externalInlineLink) do |content, _params|
  content.gsub(/\[([^\]]+)\]\(([^\s]+)\s"external-inline"\)/m) do |_match|
    m = Regexp.last_match
    "<a href=\"#{m[2]}\" class=\"external-inline\" target=\"_blank\">#{m[1]}</a>"
  end
end
