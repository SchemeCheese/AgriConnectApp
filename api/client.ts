import axios from 'axios';

// Thay địa chỉ 192.168.1.X bằng địa chỉ IPv4 máy tính của bạn
// Không dùng 'localhost' vì điện thoại sẽ không hiểu
const api = axios.create({
  baseURL: 'http://192.168.1.5:3000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;