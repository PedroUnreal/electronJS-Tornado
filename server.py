import tornado.web
import tornado.ioloop


class callJSON(tornado.web.RequestHandler):
	def get(self):
		response = {
			"test" : "Test for ARMO"	
		}

		self.write(response)

if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/api", callJSON),
    ])

    app.listen(8080)
    print("I'm listening on port 8080")
    tornado.ioloop.IOLoop.current().start()

