class Request

		include HTTParty
		format :json

		base_uri 'https://xkcd.now.sh'

	#  retruns the latest comic
		def get_latest_comic
			response = self.class.get("/comic/latest.json")

			if response.success?
				response
			else
				raise response.response
			end
		end

		def find(num)
			response = self.class.get("/?comic=#{num}")

			if response.success?
				response.parsed_response
				Request.new(response["month"], esponse["num"], response["link"], 
							response["year"], response["news"], response["safe_title"], 
							response["transcript"], response["title"], response["img"], 
							response["alt"], response["day"])
			else
				raise response.response
			end
		end
end