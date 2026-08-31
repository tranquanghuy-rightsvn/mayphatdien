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
    price: "531,000,000 ₫",
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
    price: "531,000,000 ₫",
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
    image: sharedNewsImage,
    excerpt:
      "Toyota Việt Nam giới thiệu phiên bản Hilux cải tiến cùng chuỗi dịch vụ giá trị gia tăng dành cho khách hàng.",
    body: [
      "Toyota Việt Nam công bố phiên bản Hilux cải tiến năm 2018, đi kèm chiến dịch truyền thông giới thiệu chuỗi dịch vụ giá trị gia tăng dành cho khách hàng, với sự đồng hành của một gương mặt nghệ sỹ được chọn làm đại sứ thương hiệu.",
      "Hoạt động nằm trong chiến dịch nâng cao chất lượng dịch vụ mà Toyota Việt Nam triển khai nhằm mang lại trải nghiệm mua xe và hậu mãi thuận tiện hơn cho khách hàng, trong đó có gói hỗ trợ tài chính mua xe với thủ tục đơn giản và lãi suất ưu đãi.",
    ],
  },
  {
    slug: "toyota-viet-nam-gioi-thieu-fortuner-phien-ban-cai-tien-2018",
    title: "Toyota Việt Nam giới thiệu Fortuner phiên bản 2018",
    date: "15/06/2019",
    author: "Trần Hoàng Quân",
    image: sharedNewsImage,
    excerpt:
      "Phiên bản Fortuner 2018 được Toyota Việt Nam giới thiệu cùng loạt hoạt động nâng cao chất lượng dịch vụ khách hàng.",
    body: [
      "Tiếp nối chiến dịch cải tiến sản phẩm, Toyota Việt Nam giới thiệu phiên bản Fortuner 2018 với nhiều nâng cấp, đồng thời đẩy mạnh các dịch vụ hỗ trợ khách hàng sau bán hàng.",
      "Chương trình được xây dựng nhằm mang lại sự thuận tiện tối đa cho khách hàng khi trải nghiệm dịch vụ tại hệ thống đại lý Toyota trên toàn quốc.",
    ],
  },
  {
    slug: "toyota-viet-nam-ra-mat-loat-phim-ngan-gioi-thieu-chuoi-dich-vu-gia-tri-gia-tang-toyota",
    title: "Toyota ra mắt loạt phim ngắn về chuỗi giá trị tăng",
    date: "15/06/2019",
    author: "Trần Hoàng Quân",
    image: sharedNewsImage,
    excerpt:
      "Toyota Việt Nam ra mắt loạt phim ngắn giới thiệu chuỗi dịch vụ giá trị gia tăng dành cho khách hàng.",
    body: [
      "Toyota Việt Nam chính thức ra mắt loạt phim ngắn giới thiệu chuỗi dịch vụ giá trị gia tăng, một phần trong chiến dịch nâng cao chất lượng dịch vụ được triển khai trên toàn hệ thống đại lý.",
      "Loạt phim tập trung giới thiệu các tiện ích và chính sách hỗ trợ tài chính, bảo hành, giúp khách hàng an tâm hơn trong suốt quá trình sở hữu và sử dụng xe.",
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
  { slug: "ho-tro-mua-hang", title: "Hỗ trợ mua hàng" },
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
    "Tiền thân là một trạm bảo dưỡng, sửa chữa ô tô được thành lập năm 1993 để phục vụ nhu cầu của thị trường miền Trung, đơn vị dần khẳng định uy tín và được Toyota Việt Nam công nhận là trạm dịch vụ ủy quyền khu vực miền Trung.",
    "Ngày 20/12/2000, Toyota Đà Nẵng chính thức khai trương tại Quận Hải Châu, Đà Nẵng, với đội ngũ nhân sự ban đầu gồm hơn hai mươi cán bộ nhân viên tâm huyết. Chỉ sau năm đầu hoạt động, đại lý đã đạt doanh số hàng trăm xe cùng hàng nghìn lượt xe dịch vụ — một khởi đầu đáng khích lệ cho thị trường còn nhiều mới mẻ lúc bấy giờ.",
    "Qua từng giai đoạn phát triển, doanh số bán hàng và lượng xe vào dịch vụ của Toyota Đà Nẵng liên tục tăng trưởng, khẳng định vị thế là một trong những đại lý ủy quyền tiêu biểu của Toyota tại khu vực miền Trung – Tây Nguyên.",
    "Với phương châm lấy sự hài lòng của khách hàng làm trọng tâm, Toyota Đà Nẵng không ngừng đầu tư cơ sở vật chất, đào tạo đội ngũ kỹ thuật viên và mở rộng dịch vụ nhằm mang đến trải nghiệm mua xe và sử dụng xe tốt nhất cho khách hàng.",
    "Năm 2013, Toyota Đà Nẵng khai trương thêm cơ sở mới với quy mô lớn hơn, được đầu tư khang trang hiện đại theo tiêu chuẩn của Toyota, nâng cao đáng kể năng lực phục vụ khách hàng cả về bán hàng lẫn dịch vụ hậu mãi.",
  ],
};
