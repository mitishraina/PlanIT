import { Phone, MapPin, Mail } from "lucide-react"
import { Button } from "../components/ui/Button"

export default function Contact() {
  return (
    <div>

      <section className="relative bg-[#C9C9C9] min-h-[20vh] text-white py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 mx-auto text-center">Contact Us</h1>
      </section>
      <section className="relative bg-[#C9C9C9] min-h-[70vh] text-white -py-20 p-4">
        <div className="border border-white rounded-2xl bg-white text-black p-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Us For Any Questions</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input type="tel" className="w-full p-2 border rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input type="text" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={4} className="w-full p-2 border rounded-md" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-black mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600">(896) 675-9493</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-black mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-gray-600">Address: Plot no 32, 34, Knowledge Park III, Greater Noida, Uttar Pradesh-201310</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-black mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">saveplanit@planit.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 h-64 bg-gray-200 rounded-lg">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112119.38271176121!2d77.24352058642746!3d28.57784805920261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0f7b91511b%3A0x486f13bd49e5e7ae!2sSharda%20University!5e0!3m2!1sen!2sin!4v1737703527192!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-full rounded-lg"></iframe>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

