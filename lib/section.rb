# frozen_string_literal: true

#
# :section filter
#
# Replaces this:
#
#     section{
#       content
#     }
#
# With a "section". The content can be spread across multiple lines.
#
Nanoc::Filter.define(:section) do |content, _params|
  content.gsub(/^section\{([^\}]+)\}/m) do |_match|
    m = Regexp.last_match
    stripped = m[1].strip
    "<section markdown=\"1\">\n#{stripped}\n</section>\n"
  end
end
