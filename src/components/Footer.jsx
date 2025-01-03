
const Footer = () => {
  return (
    <footer className="bg-[#BAD8B6] text-[#8D77AB]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MentallyWell</h3>
            <p className="text-sm">
              Your daily companion for mental wellness and personal growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/journal" className="hover:underline">Journal</a></li>
              <li><a href="/quotes" className="hover:underline">Quotes</a></li>
              <li><a href="/mood" className="hover:underline">Mood</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="/forum" className="hover:underline">Forum</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/support-groups" className="hover:underline">Support Groups</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#123524]/80">fb</a>
              <a href="#" className="hover:text-[#123524]/80">X</a>
              <a href="#" className="hover:text-[#123524]/80">in</a>
              <a href="#" className="hover:text-[#123524]/80">yt</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#8D77AB]/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MentallyWell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
