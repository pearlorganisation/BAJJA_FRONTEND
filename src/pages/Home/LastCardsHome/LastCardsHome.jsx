import React from 'react'
const data = [
    {
        title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
        price: "$1500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8m09Jvc71p7HQygnqVb-WeBOyPT7W4QqiA&s"
    },
    {
        title: "Simple Mobile 4G LTE Prepaid Smartphone",
        price: "$1500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOUniFzkmknwt_sG9Cu9W3FHJw3KP94utEg&s"
    },
    {
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "$1500",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR738UbNwmlERU49P6-8kg6BXma7uEXBkwn2A&s"
    }
]
const LastCardsHome = () => {
    return (
        <div className='m-10 flex gap-2 flex-wrap lg:flex-nowrap'>
            <div className='lg:w-25 w-full'>
                <h1 className='font-bold text-xl text-gray-700' data-aos="fade-up"
                    data-aos-duration="1000">FLASH SALE TODAY</h1>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div className='flex mt-5 text-sm border-2 border-gray-200 p-1  gap-5 items-center' data-aos="fade-up"
                                data-aos-duration="1000">
                                <img className='w-24' src={item.image} alt={index} />
                                <div className='font-semibold text-gray-600'>
                                    <p className='mb-2'>{item.title}</p>
                                    <span className='text-blue-500 font-bold'>{item.price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='lg:w-25 w-full'>
                <h1 className='font-bold text-xl text-gray-700' data-aos="fade-up"
                    data-aos-duration="1000">BEST SELLERS</h1>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div className='flex mt-5 text-sm border-2 border-gray-200 p-1  gap-5 items-center' data-aos="fade-up"
                                data-aos-duration="1000">
                                <img className='w-24' src={item.image} alt={index} />
                                <div className='font-semibold text-gray-600'>
                                    <p className='mb-2'>{item.title}</p>
                                    <span className='text-blue-500 font-bold'>{item.price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='lg:w-25 w-full'>
                <h1 className='font-bold text-xl text-gray-700' data-aos="fade-up"
                    data-aos-duration="1000">TOP RATED</h1>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div className='flex mt-5 text-sm border-2 border-gray-200 p-1  gap-5 items-center' data-aos="fade-up"
                                data-aos-duration="1000">
                                <img className='w-24' src={item.image} alt={index} />
                                <div className='font-semibold text-gray-600'>
                                    <p className='mb-2'>{item.title}</p>
                                    <span className='text-blue-500 font-bold'>{item.price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='lg:w-25 w-full'>
                <h1 className='font-bold text-xl text-gray-700' data-aos="fade-up"
                    data-aos-duration="1000">NEW ARRIVAL</h1>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div className='flex mt-5 text-sm border-2 border-gray-200 p-1  gap-5 items-center' data-aos="fade-up"
                                data-aos-duration="1000">
                                <img className='w-24' src={item.image} alt={index} />
                                <div className='font-semibold text-gray-600'>
                                    <p className='mb-2'>{item.title}</p>
                                    <span className='text-blue-500 font-bold'>{item.price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>



        </div>
    )
}

export default LastCardsHome