const nodemailer = require('nodemailer');
require('dotenv').config();

class EmailService {
  constructor() {
    // Tạo transporter với Gmail
    this.transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Email gửi
        pass: process.env.EMAIL_PASS || 'your-app-password'     // App password
      }
    });

    // Email nhận thông báo
    this.adminEmail = 'phanduong182k1@gmail.com';
  }

  // Gửi email thông báo đặt lịch mới
  async sendBookingNotification(bookingData) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@sohawedding.com',
        to: this.adminEmail,
        subject: `🎉 Đặt lịch mới từ ${bookingData.customerName}`,
        html: this.generateBookingEmailTemplate(bookingData)
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Email đặt lịch đã gửi thành công:', result.messageId);
      return { success: true, messageId: result.messageId };

    } catch (error) {
      console.error('❌ Lỗi gửi email đặt lịch:', error);
      return { success: false, error: error.message };
    }
  }

  // Gửi email thông báo liên hệ mới
  async sendContactNotification(contactData) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@sohawedding.com',
        to: this.adminEmail,
        subject: `📧 Liên hệ mới từ ${contactData.name}`,
        html: this.generateContactEmailTemplate(contactData)
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Email liên hệ đã gửi thành công:', result.messageId);
      return { success: true, messageId: result.messageId };

    } catch (error) {
      console.error('❌ Lỗi gửi email liên hệ:', error);
      return { success: false, error: error.message };
    }
  }

  // Gửi email xác nhận cho khách hàng
  async sendCustomerConfirmation(customerEmail, bookingData) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@sohawedding.com',
        to: customerEmail,
        subject: '✅ Xác nhận đặt lịch - SOHA Wedding',
        html: this.generateCustomerConfirmationTemplate(bookingData)
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Email xác nhận khách hàng đã gửi thành công:', result.messageId);
      return { success: true, messageId: result.messageId };

    } catch (error) {
      console.error('❌ Lỗi gửi email xác nhận khách hàng:', error);
      return { success: false, error: error.message };
    }
  }

  // Template email thông báo đặt lịch cho admin
  generateBookingEmailTemplate(data) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #fcdede, #f8f8f8); padding: 20px; border-radius: 10px;">
          <h1 style="color: #333; text-align: center;">🎉 Đặt lịch mới - SOHA Wedding</h1>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #d63384;">👰 Thông tin khách hàng</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold;">Tên khách hàng:</td>
                <td style="padding: 8px;">${data.customerName}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Email:</td>
                <td style="padding: 8px;">${data.customerEmail}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Số điện thoại:</td>
                <td style="padding: 8px;">${data.customerPhone}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #d63384;">💒 Thông tin đám cưới</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold;">Ngày cưới:</td>
                <td style="padding: 8px;">${new Date(data.weddingDate).toLocaleDateString('vi-VN')}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Dịch vụ:</td>
                <td style="padding: 8px;">${data.serviceType}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Địa điểm:</td>
                <td style="padding: 8px;">${data.venue || 'Chưa xác định'}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Số khách:</td>
                <td style="padding: 8px;">${data.guestCount || 'Chưa xác định'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Ngân sách:</td>
                <td style="padding: 8px;">${data.budget || 'Chưa xác định'}</td>
              </tr>
            </table>
          </div>

          ${data.notes ? `
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #d63384;">📝 Ghi chú</h2>
            <p style="margin: 0; padding: 10px; background: #f9f9f9; border-radius: 5px;">${data.notes}</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666;">Đặt lịch lúc: ${new Date(data.createdAt).toLocaleString('vi-VN')}</p>
            <p style="color: #666;">ID đặt lịch: #${data.id}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Template email thông báo liên hệ cho admin
  generateContactEmailTemplate(data) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #fcdede, #f8f8f8); padding: 20px; border-radius: 10px;">
          <h1 style="color: #333; text-align: center;">📧 Liên hệ mới - SOHA Wedding</h1>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold;">Tên:</td>
                <td style="padding: 8px;">${data.name}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Email:</td>
                <td style="padding: 8px;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Số điện thoại:</td>
                <td style="padding: 8px;">${data.phone || 'Không có'}</td>
              </tr>
              ${data.service ? `
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Dịch vụ quan tâm:</td>
                <td style="padding: 8px;">${data.service}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #d63384;">💬 Tin nhắn</h2>
            <p style="margin: 0; padding: 15px; background: #f9f9f9; border-radius: 5px; line-height: 1.6;">${data.message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666;">Gửi lúc: ${new Date(data.createdAt).toLocaleString('vi-VN')}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Template email xác nhận cho khách hàng
  generateCustomerConfirmationTemplate(data) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #fcdede, #f8f8f8); padding: 20px; border-radius: 10px;">
          <h1 style="color: #333; text-align: center;">✅ Xác nhận đặt lịch - SOHA Wedding</h1>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Chào <strong>${data.customerName}</strong>,</p>
            <p>Cảm ơn bạn đã đặt lịch dịch vụ tại <strong>SOHA Wedding</strong>!</p>
            
            <h3 style="color: #d63384;">📋 Thông tin đặt lịch của bạn:</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
              <tr>
                <td style="padding: 8px; font-weight: bold;">Dịch vụ:</td>
                <td style="padding: 8px;">${data.serviceType}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Ngày cưới:</td>
                <td style="padding: 8px;">${new Date(data.weddingDate).toLocaleDateString('vi-VN')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Mã đặt lịch:</td>
                <td style="padding: 8px;"><strong>#${data.id}</strong></td>
              </tr>
            </table>

            <div style="background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #2d5a2d;"><strong>🎉 Đặt lịch thành công!</strong></p>
              <p style="margin: 5px 0 0 0; color: #2d5a2d;">Chúng tôi sẽ liên hệ với bạn trong vòng 24h để xác nhận chi tiết.</p>
            </div>

            <h3 style="color: #d63384;">📞 Liên hệ với chúng tôi:</h3>
            <ul style="line-height: 1.8;">
              <li><strong>Hotline:</strong> 0867058105</li>
              <li><strong>Email:</strong> sohawedding199@gmail.com</li>
              <li><strong>Địa chỉ:</strong> 199 Giáp Nhất, Thanh Xuân, Hà Nội</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #666; font-size: 14px;">
              Cảm ơn bạn đã tin tương và lựa chọn SOHA Wedding!<br>
              Chúng tôi sẽ đồng hành cùng bạn tạo nên một đám cưới hoàn hảo. 💕
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // Gửi email tùy chỉnh
  async sendCustomEmail(to, subject, message) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@sohawedding.com',
        to: to,
        subject: subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #fcdede, #f8f8f8); padding: 20px; border-radius: 10px;">
              <h1 style="color: #333; text-align: center;">SOHA Wedding</h1>
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                ${message}
              </div>
              <div style="text-align: center; margin-top: 20px;">
                <p style="color: #666; font-size: 14px;">
                  Email từ SOHA Wedding<br>
                  📞 0867058105 | 📧 sohawedding199@gmail.com
                </p>
              </div>
            </div>
          </div>
        `
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Email tùy chỉnh đã gửi thành công:', result.messageId);
      return { success: true, messageId: result.messageId };

    } catch (error) {
      console.error('❌ Lỗi gửi email tùy chỉnh:', error);
      return { success: false, error: error.message };
    }
  }

  // Kiểm tra kết nối email service
  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log('✅ Email service đã kết nối thành công');
      return true;
    } catch (error) {
      console.error('❌ Lỗi kết nối email service:', error);
      return false;
    }
  }

  // Test gửi email
  async testEmail() {
    try {
      const testData = {
        customerName: 'Test Customer',
        customerEmail: 'test@example.com',
        customerPhone: '0123456789',
        weddingDate: new Date(),
        serviceType: 'Chụp ảnh cưới',
        venue: 'Test Venue',
        guestCount: 100,
        budget: '10,000,000 VND',
        notes: 'Đây là email test',
        id: 'TEST123',
        createdAt: new Date().toISOString()
      };

      return await this.sendBookingNotification(testData);
    } catch (error) {
      console.error('❌ Lỗi test email:', error);
      return { success: false, error: error.message };
    }
  }
}

module.exports = new EmailService();
