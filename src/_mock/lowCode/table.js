import Mock from 'mockjs'
Mock.mock('/api/table/columns', 'get', {
 
    'data|5-10': [
      {
        'id|+1': 1,
        name: '@cname',
        'age|18-60': 18,
        email: '@email',
        phone: /^1[3456789]\d{9}$/,
        address: '@county(true)',
        createTime: '@datetime'
      }
    ]
  
})
