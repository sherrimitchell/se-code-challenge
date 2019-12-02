class Comic < ApplicationRecord
	include SeCodeChallenge

		attr_accessor 	:month,
						:num,
						:link,
						:year,
						:news,
						:safe_title,
						:transcript,
						:alt,
						:img,
						:title,
						:day

		def initialize(month, num, link, year, news, safe_title, transcript, alt, img, title, day)
			@month = response["month"]
			@num = response["num"]
			@link = response["link"]
			@year = response["year"]
			@news = response["news"]
			@safe_title = response["safe_title"]
			@transcript = response["transcript"]
			@alt = response["title"]
			@img = response["img"]
			@title = response["alt"]
			@day = response["day"]
		end
end
