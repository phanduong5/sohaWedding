const express = require('express');
const router = express.Router();

// Mô phỏng database tạm thời
let services = [
  {
    id: '1',
    name: 'Chụp ảnh cưới Studio',
    description: 'Dịch vụ chụp ảnh cưới tại studio với đầy đủ trang phục và phụ kiện',
    category: 'photography',
    price: {
      basic: 2000000,
      standard: 3500000,
      premium: 5000000
    },
    features: [
      '50-100 ảnh đã chỉnh sửa',
      'Trang phục cô dâu chú rể',
      'Makeup chuyên nghiệp',
      'Backdrop đa dạng'
    ],
    duration: '4-6 giờ',
    imageUrl: '/images/service/ảnh cưới studio.avif',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Chụp ảnh cưới Ngoại cảnh',
    description: 'Dịch vụ chụp ảnh cưới tại các địa điểm ngoại cảnh đẹp',
    category: 'photography',
    price: {
      basic: 3000000,
      standard: 4500000,
      premium: 6500000
    },
    features: [
      '80-150 ảnh đã chỉnh sửa',
      'Địa điểm ngoại cảnh đẹp',
      'Trang phục đa dạng',
      'Makeup & tạo kiểu'
    ],
    duration: '6-8 giờ',
    imageUrl: '/images/service/ảnh cưới studio + hồ tây.avif',
    isActive: true,
    createdAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    name: 'Chụp phóng sự ngày cưới',
    description: 'Ghi lại toàn bộ khoảnh khắc đặc biệt trong ngày cưới của bạn',
    category: 'wedding-day',
    price: {
      basic: 4000000,
      standard: 6000000,
      premium: 8500000
    },
    features: [
      'Chụp từ sáng đến tối',
      '200-400 ảnh đã chỉnh sửa',
      '2-3 photographer',
      'Video highlight 3-5 phút'
    ],
    duration: '8-12 giờ',
    imageUrl: '/images/service/chup-quay-phong-su-ngay-cuoi.avif',
    isActive: true,
    createdAt: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    name: 'Trang điểm cô dâu',
    description: 'Dịch vụ trang điểm chuyên nghiệp cho cô dâu',
    category: 'makeup',
    price: {
      basic: 800000,
      standard: 1200000,
      premium: 1800000
    },
    features: [
      'Makeup theo concept',
      'Làm tóc chuyên nghiệp',
      'Thử makeup trước ngày cưới',
      'Touch up trong ngày'
    ],
    duration: '2-3 giờ',
    imageUrl: '/images/service/make-up-co-dau.avif',
    isActive: true,
    createdAt: '2024-01-04T00:00:00Z'
  }
];

// GET /api/services - Lấy danh sách dịch vụ
router.get('/', (req, res) => {
  try {
    const { category, active, page = 1, limit = 10 } = req.query;
    
    let filteredServices = services;
    
    // Lọc theo category
    if (category && category !== 'all') {
      filteredServices = filteredServices.filter(service => service.category === category);
    }
    
    // Lọc theo trạng thái active
    if (active !== undefined) {
      const isActive = active === 'true';
      filteredServices = filteredServices.filter(service => service.isActive === isActive);
    }

    // Phân trang
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedServices = filteredServices.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: paginatedServices,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredServices.length / limit),
        totalItems: filteredServices.length,
        itemsPerPage: parseInt(limit)
      }
    });

  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi tải danh sách dịch vụ'
    });
  }
});

// GET /api/services/categories - Lấy danh sách categories
router.get('/categories', (req, res) => {
  try {
    const categories = [
      { id: 'photography', name: 'Chụp ảnh cưới', count: services.filter(s => s.category === 'photography').length },
      { id: 'wedding-day', name: 'Phóng sự ngày cưới', count: services.filter(s => s.category === 'wedding-day').length },
      { id: 'makeup', name: 'Trang điểm', count: services.filter(s => s.category === 'makeup').length },
      { id: 'dress-rental', name: 'Cho thuê váy cưới', count: services.filter(s => s.category === 'dress-rental').length }
    ];

    res.json({
      success: true,
      data: categories
    });

  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi tải danh mục'
    });
  }
});

// GET /api/services/:id - Lấy chi tiết dịch vụ
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const service = services.find(s => s.id === id);

    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy dịch vụ'
      });
    }

    res.json({
      success: true,
      data: service
    });

  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi tải dịch vụ'
    });
  }
});

// POST /api/services - Tạo dịch vụ mới
router.post('/', (req, res) => {
  try {
    const { name, description, category, price, features, duration, imageUrl } = req.body;

    // Validation
    if (!name || !description || !category || !price) {
      return res.status(400).json({
        success: false,
        error: 'Tên, mô tả, danh mục và giá là bắt buộc'
      });
    }

    const newService = {
      id: Date.now().toString(),
      name,
      description,
      category,
      price,
      features: features || [],
      duration: duration || '',
      imageUrl: imageUrl || '',
      isActive: true,
      createdAt: new Date().toISOString()
    };

    services.push(newService);

    res.status(201).json({
      success: true,
      message: 'Tạo dịch vụ thành công',
      data: newService
    });

  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi tạo dịch vụ'
    });
  }
});

// PUT /api/services/:id - Cập nhật dịch vụ
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const serviceIndex = services.findIndex(s => s.id === id);
    
    if (serviceIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy dịch vụ'
      });
    }

    services[serviceIndex] = {
      ...services[serviceIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Cập nhật dịch vụ thành công',
      data: services[serviceIndex]
    });

  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi cập nhật dịch vụ'
    });
  }
});

// DELETE /api/services/:id - Xóa dịch vụ
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const serviceIndex = services.findIndex(s => s.id === id);
    
    if (serviceIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Không tìm thấy dịch vụ'
      });
    }

    services.splice(serviceIndex, 1);

    res.json({
      success: true,
      message: 'Xóa dịch vụ thành công'
    });

  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({
      success: false,
      error: 'Có lỗi xảy ra khi xóa dịch vụ'
    });
  }
});

module.exports = router;
