import Mock from 'mockjs'
Mock.mock('/api/table/columns', 'get', {
 
    'data': [
      '序号',
      '姓名',
      '性别',
      '年龄',
      '邮箱',
      '手机号',
      '地址',
      '创建时间',

    ]
  
})
Mock.mock('/api/table/data', 'get', {
 
    'data|5-10': [
      {
        'id|+1': 1,
        name: '@cname',
        sex: '@boolean',

        'age|18-60': 18,
        email: '@email',
        phone: /^1[3456789]\d{9}$/,
        address: '@county(true)',
        createTime: '@datetime'
      }
    ]
  
})
