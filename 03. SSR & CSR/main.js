
// 1. Server side rendering
// Điểm mạnh:
//     - Initial load nhanh, dễ otpimize, vì toàn bộ dữ liệu đã được xử lý ở  
//       server. Client chỉ việc hiển thị.
//     - Dễ hiểu và dễ code hơn. Developer chỉ cần code 1 project web là được, 
//       không cần phải tách ra front-end và back-end.
//     - SEO tốt vì khi bot của Google, Bing vào web sẽ thấy toàn bộ dữ liệu 
//       dưới dạng HTML.
//     - ...
// Điểm yếu:
//     - Mỗi lần người dùng chuyển trang là site phải load lại, gây khó chịu
//     - Tốn băng thông vì server phải gửi nhiều dữ liệu thừa và trùng
//     - Nặng server vì server phải xử lý nhiều logic và dữ liệu

// 2. Client side rendering
// Điểm mạnh:
//     - Page chỉ cần load một lần duy nhất. Khi user chuyển trang hoặc thêm 
//       dữ liệu, JavaScript sẽ lấy và gửi dữ liệu từ server qua AJAX. 
//       User có thể thấy dữ liệu mới mà không cần chuyển trang
//     - Chuyển logic sang client nên giảm tải được một phần cho server.
//     - Không cần load đi loại lại nhiều
//
// Điểm yếu:
//     - Initial load sẽ chậm hơn nếu không biết optimize. Lý do là broser 
//       phải tải toàn bộ JavaScript về (khá nặng), parse và chạy JS, gọi 
//       API để lấy dữ liệu từ server (chậm), sau đó render dữ liệu
//     - Đòi hỏi project phải chia làm 2 phần riêng là back-end (REST api) 
//       và front-end nên khó code hơn
//     - Không chạy được nếu JavaScript bị disable, hoặc ở các trình duyệt 
//       cũ không nhận JavaScript ES6 
//     - SEO không tốt bằng Server Side Rendering