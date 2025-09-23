
function Footer() {
    return (
        <div className="footer bg-amber-100 px-4 lg:pl-25">
            <div className="container mx-auto pt-20 pb-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left text-black">


                    <div className="space-y-2">
                        <p className="text-2xl font-ubuntu font-bold mb-4">Help and support</p>
                        <p>Customer service</p>
                        <p>order status</p>
                        <p>Shipping</p>
                        <p>Returns </p>
                        <p>E-Gift Card</p>
                    </div>


                    <div className="space-y-2">
                        <p className="text-2xl font-ubuntu font-bold mb-4">About Us</p>
                        <p>Opulent Stories</p>
                        <p>Sustainability</p>
                        <p>Manufacturers</p>
                        <p>Press</p>
                        <p>Pre-owned</p>
                    </div>


                    <div className="space-y-2">
                        <p className="text-2xl font-ubuntu font-bold mb-4">Contact Us</p>
                        <p>Store Locator</p>
                        <p>Chat</p>
                        <p>New York,</p>
                        <p>96th Street, NY 10129</p>
                        {/* <section className="bg-amber-100 py-12">

                            <div className="flex justify-center items-center gap-12">
                                <img
                                    src="/logo1.png"
                                    alt="Logo 1"
                                    className="h-20 w-auto object-contain"
                                />
                                <img
                                    src="/logo2.png"
                                    alt="Logo 2"
                                    className="h-20 w-auto object-contain"
                                />
                                <img
                                    src="/logo3.png"
                                    alt="Logo 3"
                                    className="h-20 w-auto object-contain"
                                />
                            </div>
                        </section> */}
                    </div>
                </div>

                <div>
                    <img className="h-40 w-40 mt-20" src="../public/DOC-20250418-WA0111..png" alt="" />
                </div>

                <div className="text-left mt-16">
                    <p className="text-xl w-300 font-light font-ubuntu text-black mb-4">Terms & Conditions | Privacy Policy | Privacy Commitment | Interest Based Ads | Do Not Sell or Share My Personal Information | PVH Corp. Joint Modern Slavery Act Statement | Brand Protection Accessibility</p>
                    <p className="font-ubuntu text-black pb-10">© 2025 Opulent licensing, LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;