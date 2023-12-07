export const getDashboard = (req, res) => {
    res.render('admin/index', {
        content: 'admin/index',
        pageTitle: 'Admin Panel',
        path: '/'
    })
}

export const getAddService = (req, res) => {
    res.render('admin/index', {
        content: 'admin/index',
        pageTitle: 'Admin Panel',
        path: '/service/add'
    })
}

export const getAllService = (req, res) => {
    res.render('admin/index', {
        content: 'admin/index',
        pageTitle: 'Admin Panel',
        path: '/service/all'
    })
}