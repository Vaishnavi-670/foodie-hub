import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-orange-50 text-gray-800">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-900 mb-4">About Foodie Hub</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Welcome to Foodie Hub, where culinary delights meet a passion for great food. We are committed to bringing you the best food experiences, whether you're dining in or exploring new recipes.
                    </p>
                </div>

                <div className="mb-12 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className='h-[450px] w-[650px]'>
                            <video autoPlay loop muted
                                src="/food.mp4"
                                alt="Our Story"
                                className="rounded-lg h-[450px] object-cover w-[650px] shadow-lg "
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-orange-900 ">Our Story</h2>
                            <p className="text-center text-xl text-gray-900 mt-2 mb-4">
                                A glimpse into our journey
                            </p>
                            <p className="text-lg mb-4">
                                Foodie Hub began with a simple idea: to create a space where food lovers could come together to enjoy delicious meals and share their passion for <br /> Our journey started in 2010, and over the years, we’ve grown into a beloved destination for food enthusiasts.
                            </p>
                            <p className="text-lg">
                                From our humble beginnings as a small café, we've expanded into a full-service restaurant and online platform, offering a variety of dishes, cooking classes, and more.
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-semibold text-orange-900 ">Our Mission</h2>
                            <p className="text-center text-xl text-gray-900 mt-2 mb-4">
                                Our commitment to culinary excellence
                            </p>
                            <p className="text-lg mb-4">
                                Our mission at Foodie Hub is to create memorable culinary experiences that bring people together. We believe that food is more than just sustenance – it's an opportunity to connect, celebrate, and explore new cultures and flavors.
                            </p>
                            <p className="text-lg">
                                We are dedicated to using the freshest ingredients and sustainable practices to deliver delicious and responsible food. Whether you’re dining with us or following one of our recipes at home, we strive to make every meal special.
                            </p>
                        </div>
                        <div className="order-1 className='h-[450px] w-[650px]' md:order-2">
                            <video autoPlay loop muted
                                src="/foodd.mp4"
                                alt="Our Mission"
                                className="rounded-lg h-[450px] w-[650px] shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="mb-10 h-[60vh] w-[100%]">
                    <h2 className="text-5xl font-semibold text-center text-orange-900 mb-2">Our Items</h2>
                    <div className="flex w-[100%] h-[500px] items-center justify-between">
                        <div className=" w-[400px] h-64 max-w-4xl  sm:h-96">
                            <video
                                className="w-full h-full rounded-2xl object-cover shadow-lg"
                                src="/burger.mp4"
                                autoPlay loop muted
                                title="Foodie Hub Journey"
                            ></video>
                        </div>
                        <div className=" w-[400px] max-w-4xl ml-5 h-64  sm:h-96">
                            <video
                                className="w-full h-full rounded-lg object-cover shadow-lg"
                                src="/drink.mp4"
                                autoPlay loop muted
                                title="Foodie Hub Journey"
                            ></video>
                        </div>
                        <div className=" w-[400px] max-w-4xl ml-5 h-64 sm:h-96">
                            <video
                                className="w-full h-full rounded-lg object-cover shadow-lg"
                                src="/meet.mp4"
                                autoPlay loop muted
                                title="Foodie Hub Journey"
                            ></video>
                        </div>
                        <div className=" w-[400px] max-w-4xl ml-5 h-64 sm:h-96">
                            <video
                                className="w-full h-full rounded-lg object-cover shadow-lg"
                                src="/fries.mp4"
                                autoPlay loop muted
                                title="Foodie Hub Journey"
                            ></video>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center">
                    <h2 className="text-5xl font-semibold text-orange-900 mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://i.pinimg.com/236x/e3/2a/9b/e32a9bc07ac183217ec27ed481074f7f.jpg"
                                alt="Team Member 1"
                                className="rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
                            />
                            <h3 className="text-lg font-medium">John Doe</h3>
                            <p className="text-sm text-gray-600">Head Chef</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://i.pinimg.com/236x/49/3c/e7/493ce760bc067f2530d73365ace0d66c.jpg"
                                alt="Team Member 2"
                                className="rounded-full w-32 h-32 mb-4 object-cover shadow-lg"
                            />
                            <h3 className="text-lg font-medium">Jane Smith</h3>
                            <p className="text-sm text-gray-600">Sous Chef</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://i.pinimg.com/236x/5f/cc/62/5fcc622fa9545d71b86cc6a7171f1df9.jpg"
                                alt="Team Member 3"
                                className="rounded-full w-32 h-32 mb-4 object-cover shadow-lg"
                            />
                            <h3 className="text-lg font-medium">Michael Brown</h3>
                            <p className="text-sm text-gray-600">Pastry Chef</p>
                        </div>
                        {/* Team Member 4 */}
                        <div className="flex flex-col items-center">
                            <img
                                src="https://i.pinimg.com/236x/e2/70/75/e270757931b0750bad4b64950d36717b.jpg"
                                alt="Team Member 4"
                                className="rounded-full w-32 h-32 mb-4 object-cover shadow-lg"
                            />
                            <h3 className="text-lg font-medium">Emily White</h3>
                            <p className="text-sm text-gray-600">Restaurant Manager</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;
