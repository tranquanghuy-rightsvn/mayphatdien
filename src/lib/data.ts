import type {
  Category,
  NewsArticle,
  PolicyPage,
  Product,
  SaleContact,
} from "@/types/toyota";

export const siteInfo = {
  name: "Toyota 01",
  companyName: "CÔNG TY TNHH MTV TOYOTA ĐÀ NẴNG",
  address: "Phạm Văn Bạch, P. 15, Q. Tân Bình, Tp. HCM",
  email: "email@gmail.com",
  hotline: "0999.999.999 – 0999.999.999",
  website: "www.tenweb.vn",
  logo: "/images/logo-toyota-da-nang-99-8369.png",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8951647747363!2d106.63615131462117!3d10.819334261359117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529667c77fcdd%3A0x39f60dd29f004faf!2zMi84NSBQaOG6oW0gVsSDbiBC4bqhY2gsIFBoxrDhu51uZyAxNSwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1568732176587!5m2!1svi!2s",
};

export const categories: Category[] = [
  { slug: "innova", name: "Innova", icon: "/images/innova-2001.png" },
  { slug: "camry", name: "Camry", icon: "/images/corola-9329.png" },
  {
    slug: "corolla-altis",
    name: "Corolla Altis",
    icon: "/images/corola-9329.png",
  },
  { slug: "fortuner", name: "Fortuner", icon: "/images/fortuner-6174.png" },
  { slug: "hilux", name: "Hilux", icon: "/images/hilux-9276.png" },
  {
    slug: "land-cruiser",
    name: "Land Cruiser",
    icon: "/images/parado-5729.png",
  },
  {
    slug: "land-cruiser-parado",
    name: "Land Cruiser Parado",
    icon: "/images/parado-5729.png",
  },
  { slug: "vios", name: "Vios", icon: "/images/vios-2684.png" },
  { slug: "yaris", name: "Yaris", icon: "/images/yaris-3361.png" },
];

export const heroSlides: string[] = [
  "/images/slide-toyota-da-nang-002-8537.jpg",
  "/images/slide-toyota-da-nang-003-7151.jpg",
  "/images/slide-toyota-da-nang-004-6317.jpg",
  "/images/slide-toyota-da-nang-005-2552.jpg",
];

export const saleContacts: SaleContact[] = [
  {
    name: "Sale 01",
    phone: "0949999295",
    email: "hotro@web2s.vn",
    zaloUrl: "https://zalo.me/0949999295",
    skypeUrl: "skype:....?chat",
    viberUrl: "viber://add?number=0949999295",
  },
  {
    name: "Sale 02",
    phone: "0949999295",
    email: "hotro@web2s.vn",
    zaloUrl: "https://zalo.me/0949999295",
    skypeUrl: "skype:skype?chat",
    viberUrl: "viber://add?number=0949999295",
  },
];

export const products: Product[] = [
  {
    slug: "vios-1-5e-mt",
    name: "Vios 1.5E (MT)",
    categorySlug: "vios",
    price: "531,000,000 ₫",
    thumbnail: "/images/vios-mt-7471.jpg",
    images: [
      { src: "/images/e5-2168.png", alt: "Vios 1.5E (MT)" },
      { src: "/images/vios-mt-7471.jpg", alt: "Vios 1.5E (MT)" },
    ],
    colors: ["Bạc", "Đen", "Nâu Vàng", "Trắng"],
    year: "2018",
    condition: "Mới",
    warranty: "3 năm hoặc 100.000km",
    views: 153,
    seats: "5 chỗ",
    bodyType: "Sedan",
    fuel: "Xăng",
    origin: "Xe trong nước",
    otherInfo: ["Số tự động vô cấp", "Động cơ xăng dung tích 1.496 cm3"],
    description: "Thay đổi để bứt phá",
  },
  {
    slug: "vios-1-5e-cvt",
    name: "Vios 1.5E (CVT)",
    categorySlug: "vios",
    price: "569,000,000 ₫",
    thumbnail: "/images/vios-et-9465.jpg",
    images: [{ src: "/images/vios-et-9465.jpg", alt: "Vios 1.5E (CVT)" }],
    colors: ["Bạc", "Đen", "Nâu Vàng", "Trắng"],
    year: "2018",
    condition: "Mới",
    warranty: "3 năm hoặc 100.000km",
    views: 153,
    seats: "5 chỗ",
    bodyType: "Sedan",
    fuel: "Xăng",
    origin: "Xe trong nước",
    otherInfo: ["Số tự động vô cấp", "Động cơ xăng dung tích 1.496 cm3"],
    description: "Thay đổi để bứt phá",
  },
  {
    slug: "vios-1-5g-cvt",
    name: "Vios 1.5G (CVT)",
    categorySlug: "vios",
    price: "606,000,000 ₫",
    thumbnail: "/images/vios-gt-6509.jpg",
    images: [{ src: "/images/vios-gt-6509.jpg", alt: "Vios 1.5G (CVT)" }],
    colors: ["Bạc", "Đen", "Nâu Vàng", "Trắng"],
    year: "2018",
    condition: "Mới",
    warranty: "3 năm hoặc 100.000km",
    views: 153,
    seats: "5 chỗ",
    bodyType: "Sedan",
    fuel: "Xăng",
    origin: "Xe trong nước",
    otherInfo: ["Số tự động vô cấp", "Động cơ xăng dung tích 1.496 cm3"],
    description: "Thay đổi để bứt phá",
  },
];

export const productTabs = [
  "Mô tả",
  "Thông số kỹ thuật",
  "Thư viện ảnh",
  "Màu xe",
  "Nội thất",
  "Ngoại thất",
  "Vận hành",
];

const sharedNewsImage =
  "/images/toyota-viet-nam-ra-mat-loat-phim-ngan-gioi-thieu-chuoi-dich-vu-gia-tri-gia-tang-toyota-241.jpg";

export const newsArticles: NewsArticle[] = [
  {
    slug: "toyota-viet-nam-gioi-thieu-hilux-phien-ban-cai-tien-2018",
    title: "Toyota Việt Nam giới thiệu Hilux phiên bản cải tiến 2018",
    date: "15/06/2019",
    author: "Trần Hoàng Quân",
    image: "/images/toyota-da-nang-114-0251.jpg",
    promoted: true,
    excerpt:
      "Toyota Việt Nam chính thức giới thiệu loạt phim ngắn về “Chuỗi dịch vụ giá trị gia tăng” với sự góp mặt của diễn viên chính là nghệ sỹ nhạc Rap Suboi – đồng thời cũng là Đại sứ thương hiệu của Toyota Việt Nam.",
    body: [
      "Toyota Việt Nam chính thức giới thiệu loạt phim ngắn về “Chuỗi dịch vụ giá trị gia tăng” với sự góp mặt của diễn viên chính là nghệ sỹ nhạc Rap Suboi – đồng thời cũng là Đại sứ thương hiệu của Toyota Việt Nam. Đây là một hoạt động nằm trong chiến dịch nâng cao chất lượng Toyota – “NO QUALITY.NO LIFE” (Chất lượng làm nên tất cả) mà TMV chính thức triển khai từ tháng 9/2017.",
      "“Dịch vụ tài chính Toyota” là dịch vụ hỗ trợ tài chính một cửa khi mua xe tại các đại lý Toyota tại Việt Nam với thủ tục đơn giản, tiện lợi và vô cùng nhanh chóng, giúp khách hàng có thể tiết kiệm thời gian một cách tối đa, trong khi mức lãi suất lại vô cùng hấp dẫn",
    ],
  },
  {
    slug: "toyota-viet-nam-gioi-thieu-fortuner-phien-ban-cai-tien-2018",
    title: "Toyota Việt Nam giới thiệu Fortuner phiên bản 2018",
    date: "15/06/2019",
    author: "Trần Hoàng Quân",
    image: "/images/toyota-da-nang-113-6853.png",
    excerpt:
      "Toyota Việt Nam chính thức giới thiệu loạt phim ngắn về “Chuỗi dịch vụ giá trị gia tăng” với sự góp mặt của diễn viên chính là nghệ sỹ nhạc Rap Suboi – đồng thời cũng là Đại sứ thương hiệu của Toyota Việt Nam.",
    body: [
      "Toyota Việt Nam chính thức giới thiệu loạt phim ngắn về “Chuỗi dịch vụ giá trị gia tăng” với sự góp mặt của diễn viên chính là nghệ sỹ nhạc Rap Suboi – đồng thời cũng là Đại sứ thương hiệu của Toyota Việt Nam. Đây là một hoạt động nằm trong chiến dịch nâng cao chất lượng Toyota – “NO QUALITY.NO LIFE” (Chất lượng làm nên tất cả) mà TMV chính thức triển khai từ tháng 9/2017.",
      "“Dịch vụ tài chính Toyota” là dịch vụ hỗ trợ tài chính một cửa khi mua xe tại các đại lý Toyota tại Việt Nam với thủ tục đơn giản, tiện lợi và vô cùng nhanh chóng, giúp khách hàng có thể tiết kiệm thời gian một cách tối đa, trong khi mức lãi suất lại vô cùng hấp dẫn",
    ],
  },
  {
    slug: "toyota-viet-nam-ra-mat-loat-phim-ngan-gioi-thieu-chuoi-dich-vu-gia-tri-gia-tang-toyota",
    title: "Toyota ra mắt loạt phim ngắn về chuỗi giá trị tăng",
    date: "15/06/2019",
    author: "Trần Hoàng Quân",
    image: sharedNewsImage,
    excerpt:
      "Toyota Việt Nam chính thức giới thiệu loạt phim ngắn về “Chuỗi dịch vụ giá trị gia tăng” với sự góp mặt của diễn viên chính là nghệ sỹ nhạc Rap Suboi – đồng thời cũng là Đại sứ thương hiệu của Toyota Việt Nam.",
    body: [
      "Toyota Việt Nam chính thức giới thiệu loạt phim ngắn về “Chuỗi dịch vụ giá trị gia tăng” với sự góp mặt của diễn viên chính là nghệ sỹ nhạc Rap Suboi – đồng thời cũng là Đại sứ thương hiệu của Toyota Việt Nam. Đây là một hoạt động nằm trong chiến dịch nâng cao chất lượng Toyota – “NO QUALITY.NO LIFE” (Chất lượng làm nên tất cả) mà TMV chính thức triển khai từ tháng 9/2017.",
      "“Dịch vụ tài chính Toyota” là dịch vụ hỗ trợ tài chính một cửa khi mua xe tại các đại lý Toyota tại Việt Nam với thủ tục đơn giản, tiện lợi và vô cùng nhanh chóng, giúp khách hàng có thể tiết kiệm thời gian một cách tối đa, trong khi mức lãi suất lại vô cùng hấp dẫn",
    ],
  },
];

export const policyPages: PolicyPage[] = [
  { slug: "chinh-sach-bao-mat", title: "Chính sách bảo mật" },
  {
    slug: "chinh-sach-ho-tro-khach-hang",
    title: "Chính sách hỗ trợ khách hàng",
  },
  { slug: "chinh-sach-dat-hang", title: "Chính sách đặt hàng" },
  { slug: "ho-tro-mua-hang", title: "Hướng dẫn mua hàng" },
  { slug: "huong-dan-thanh-toan", title: "Hướng dẫn thanh toán" },
  { slug: "huong-dan-giao-nhan", title: "Hướng dẫn giao nhận" },
];

export const footerLinks = {
  policies: policyPages.slice(0, 3),
  support: policyPages.slice(3, 6),
};

export const aboutContent = {
  title: "ĐẠI LÝ TOYOTA ĐÀ NẴNG",
  subtitle: "KÍNH CHÀO QUÝ KHÁCH",
  image: "/images/gioi-thieu-143.jpg",
  paragraphs: [
    "Năm 1993, Trạm bảo dưỡng, sửa chữa xe ô tô du lịch Đà Nẵng được khởi động để đáp ứng nhu cầu hoàn toàn mới mẻ tại thị trường miền Trung. Hơn năm sau đó, trạm sửa chữa đã trở thành một địa chỉ lớn và uy tín về dịch vụ sửa chữa xe tại Đà Nẵng, và được Công ty ô tô Toyota Việt Nam (TMV) công nhận là “Trạm dịch vụ Ủy quyền của Toyota tại miền Trung” – TASS. Cùng với đó, TMV còn tích cực hỗ trợ đào tạo cán bộ và nhân viên kỹ thuật theo định kỳ và cung cấp trang thiết bị, đặc biệt là trang thiết bị chuyên dùng phục vụ cho việc sửa chữa các loại ô tô hiện đại theo đúng tiêu chuẩn của Toyota toàn cầu.",
    "Tiếp theo đà phát triển này, ngày 20/12/2000, Xí nghiệp Toyota Da Nang chính thức được khai trương tại địa chỉ 151 – 153 Lê Đình Lý, Quận Hải Châu, Thành phố Đà Nẵng. Với tổng vốn đầu tư ban đầu hơn 7,7 tỷ đồng, Toyota Đà Nẵng có khu nhà xưởng khang trang, sạch sẽ trên lô đất rộng 3.800 m2. Ban đầu, toàn xí nghiệp chỉ có 26 cán bộ nhân viên, song tất cả đều là những người có tâm huyết, nhiệt tình và tinh thần học hỏi. Với những nỗ lực của tập thể cán bộ nhân viên, sự chỉ đạo của Ban Giám đốc Xí nghiệp, sự hỗ trợ giúp đỡ của Công ty ô tô Toyota Việt Nam và đơn vị quản lý trực tiếp là Công ty Phú Tài – QK5, chỉ sau hơn một năm Toyota Đà Nẵng đã ghi được dấu ấn khi doanh số bán hàng đạt được 181 xe và 2.650 lượt xe dịch vụ. Đây là một sự khởi đầu nhỏ cho một thị trường miền Trung được đánh giá là còn khá mới mẻ và khó khăn.",
    "Cuối năm 2003 doanh số lũy kế chạm mốc 1.000 xe và đến tháng 9 năm 2010, đúng 10 năm sau ngày khai trương Toyota Đà Nẵng đạt mốc 5.000 xe, dịch vụ cũng đã đạt mức 2.300 lượt xe/tháng. Có thể đối với các Đại lý khác thì thời gian đạt mốc 5.000 xe thì mất đến 10 năm là chậm nhưng đối với thị trường Miền Trung – Tây Nguyên thì đây là một thành tích đáng kể. Sau 10 năm, sản lượng bán hàng của Toyota Đà Nẵng tăng hơn 6 lần (tăng trưởng hơn 20% / năm).",
    "Xác định rõ niềm tin của khách hàng chinh là sức mạnh của doanh nghiệp ,Toyota Đà Nẵng rất chú trọng đến công tác chăm sóc khách hàng. Không chỉ tiếp đón tận tình mọi khách hàng đến tham quan, mua sản phẩm và sử dụng dịch vụ của công ty mà Toyota Đà Nẵng còn thành lập một bộ phận riêng làm nhiệm vụ như chăm sóc khách hàng, như điện thoại, gửi thư nhắc khách hàng lịch bảo dưỡng xe, thông báo các chương trình khuyến mại ưu đãi, hay thăm hỏi những khách hàng cũ như những người thân của gia đình. Ngoài các chương trình chung của TMV, Toyota Đà Nẵng còn thực hiện các chương trình khuyến mại riêng để tạo thêm niềm vui cho từng khách hàng.",
    "Ngày 18 tháng 8 năm 2013, Toyota Đà Nẵng chính thức khai trương cơ sở mới tại 69-71 Duy Tân, P.Hòa Thuận Tây, Q.Hải Châu, TP.Đà Nẵng. Cơ sở mới có diện tích 5.165m2, xây dựng 4 tầng. Tổng mức đầu tư lên đến 70 tỷ đồng. Cơ sở mới được đầu tư khang trang hiện đại theo tiêu chuẩn của Toyota Việt Nam với công suất thiết kế lên đến 3.000 xe bán và 60.000 lượt xe dịch vụ /năm.",
  ],
};
