# Bản HTML/CSS/JS thuần

Đây là bản clone độc lập của website Toyota Đà Nẵng, viết bằng HTML + CSS + JS thuần —
**không** dùng React/Next.js, không cần `npm install` hay build tool. Toàn bộ nội dung/giao diện
được sinh ra từ cùng một nguồn dữ liệu với bản Next.js (`src/lib/data.ts`), qua script
`scripts/generate-static-html.mjs` ở thư mục gốc project.

## Chạy thử

Vì các trang dùng đường dẫn kiểu thư mục (`/danh-muc/innova/`, v.v.) và fetch CSS/ảnh bằng
đường dẫn tuyệt đối (`/css/styles.css`, `/images/...`), bạn cần chạy qua **local static server**
(không mở trực tiếp bằng `file://`). Vài lựa chọn:

```bash
# Cách 1: Python (có sẵn trên hầu hết máy)
cd html
python3 -m http.server 8080

# Cách 2: Node (nếu đã cài serve)
npx serve html -p 8080
```

Sau đó mở `http://localhost:8080/`.

## Cấu trúc

```
html/
  index.html                 Trang chủ
  gioi-thieu/index.html       Giới thiệu
  cua-hang/index.html         Danh sách sản phẩm
  danh-muc/<slug>/index.html  9 trang danh mục
  san-pham/<slug>/index.html  3 trang chi tiết sản phẩm
  category/khuyen-mai/, category/tin-tuc/
  lien-he/index.html          Liên hệ (form)
  <slug>/index.html           3 bài tin tức + 6 trang chính sách
  css/styles.css               CSS đã build sẵn (Tailwind, lấy từ .next/static build)
  media/*.woff2                Font Roboto
  images/                      Toàn bộ ảnh (copy từ public/images)
  js/main.js                   Toàn bộ tương tác: mobile menu, hero carousel,
                                gallery ảnh sản phẩm, tab sản phẩm, form liên hệ
```

## Cập nhật lại bản HTML này sau khi sửa bản Next.js

Nếu bạn sửa nội dung/giao diện ở bản Next.js (`src/`), chạy lại 2 lệnh sau ở thư mục gốc
project để đồng bộ:

```bash
npm run build                          # build lại để có CSS Tailwind mới nhất
node scripts/generate-static-html.mjs  # sinh lại toàn bộ HTML trong html/
```

Script tự lấy CSS đã compile mới nhất từ `.next/static/chunks/*.css` và ghi đè toàn bộ
`html/*/index.html` — không cần sửa tay các file trong `html/`.
