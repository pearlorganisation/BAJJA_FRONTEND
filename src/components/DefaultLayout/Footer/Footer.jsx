import Logo from "../../../assets/Logo.png";
import PlayStore from "../../../assets/PlayStore.png";
import AppStore from "../../../assets/AppStore.png";
import ArrowRight from "../../../assets/ArrowRight.png";

const topCategories = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Vehicles",
  },
  {
    id: 3,
    name: "Real Estate",
  },
];

const services = [
  {
    id: 1,
    name: "Home Cleaning",
  },
  {
    id: 2,
    name: "Professional Services",
  },
];

const quickLinks = [
  {
    id: 1,
    name: "Shop Product",
  },
  {
    id: 2,
    name: "Shopping Cart",
  },
  {
    id: 3,
    name: "Post an Ad",
  },
  {
    id: 4,
    name: "Compare",
  },
  {
    id: 5,
    name: "Track Order",
  },
  {
    id: 6,
    name: "Customer Help",
  },
  {
    id: 7,
    name: "About Us",
  },
];

const tags = [
  {
    id: 1,
    name: "Lipstick",
  },
  {
    id: 2,
    name: "Foundation",
  },
  {
    id: 3,
    name: "Eye Liner",
  },
  {
    id: 4,
    name: "Face Wash",
  },
  {
    id: 5,
    name: "Moisturizer",
  },
  {
    id: 6,
    name: "Kajal",
  },

  {
    id: 7,
    name: "Lip Balm",
  },
  {
    id: 8,
    name: "Sunscreen",
  },
  {
    id: 9,
    name: "Primer",
  },
  {
    id: 10,
    name: "Cleanser",
  },
  {
    id: 11,
    name: "Toner",
  },
];

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#000] font-sans tracking-wide">
        <div className="py-14 px-6 sm:px-10">
          <div className="flex items-center justify-center">
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="lg:col-span-1">
                <div className="flex gap-3">
                  <a href="javascript:void(0)">
                    <img src={Logo} alt="logo" className="w-10 mb-8" />
                  </a>
                  <h3 className="text-white text-4xl font-bold">LOGO</h3>
                </div>
                <h3 className="text-gray-300 text-sm mt-3">
                  Customer Supports
                </h3>
                <h3 className="text-white text-sm mt-1">(629) 555-0129</h3>
                <h3 className="text-gray-300 text-sm mt-2">
                  4517 Washington Ave.
                </h3>
                <h3 className="text-gray-300 text-sm mt-1">
                  Manchester, Kentucky
                </h3>
                <h3 className="text-white text-sm mt-2">info@kimbo.com</h3>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-8 text-white">
                  Top Categories
                </h4>

                {topCategories.map((topCategory) => (
                  <ul key={topCategory.id} className="space-y-4">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-300 hover:text-white text-sm"
                      >
                        {topCategory.name}
                      </a>
                    </li>
                  </ul>
                ))}

                <h4 className="text-white mt-4">Services</h4>

                {services.map((service) => (
                  <ul key={service.id} className="space-y-4">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-300 hover:text-white text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  </ul>
                ))}

                <div className="mt-4 flex gap-2">
                  <h4 className="text-yellow-600 ">Browser All Services</h4>
                  <img src={ArrowRight} alt="arr right" />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-8 text-white">
                  Quick Links
                </h4>

                {quickLinks.map((quickLink) => (
                  <ul key={quickLink.id} className="space-y-4">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-300 hover:text-white text-sm"
                      >
                        {quickLink.name}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-8 text-white">
                  DOWNLOAD APP
                </h4>

                <img src={PlayStore} className="mt-4" />
                <img src={AppStore} className="mt-4" />
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-8 text-white">
                  Popular Tags
                </h4>
                <div className="space-y-4">
                  <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 w-max ">
                    {tags.map((brand) => (
                      <div
                        key={brand.id}
                        className="flex gap-2  p-2 rounded-md"
                      >
                        <h3 className="px-2 font-bold text-md text-white">
                          {brand.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-5 bg-[#000]">
          <p className="text-gray-300 text-sm">
            Kinbo Ecommerce Template © 2021 Designed By Template Cookie
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
