const routes = {
    home: '/',
    about_us: '/about-us',
    contact_us: '/contact-us',
    privacy_policy: '/privacy-policy',
    support_policy: '/support-policy',
    terms_and_conditions: '/terms-and-conditions',
    refund_policy: '/refund-policy',
    faq: '/faq',
    settings: '/settings',
    login: '/login',
    register: '/register',
    forgot_password: '/forgot-password',
    reset_password: '/reset-password',
    news: '/news',
    
    home_properties: '/properties',
    property_details: (code) => `/property/${code}`,

    user: {
        dashboard: '/user/dashboard',
        notification: '/user/notification',
        add_property: '/user/add-property',
        all_properties: '/user/all-properties',
        profile: '/user/profile',
        change_password: '/user/change-password',
        all_transactions: '/user/transactions',
        messages: '/user/messages',
        mess: {
          mess_dashboard: '/user/mess-system/dashboard',
          mess_config_active: '/user/mess-system/config/active-mess',
          mess_create: '/user/mess-system/config/create-mess',
          edit_mess_info: (code) => `/user/mess-system/config/edit-mess-info/${code}`,
          my_mess_list: '/user/mess-system/my-mess-list',
          mess_info_by_code: (code) => `/user/mess-system/my-mess-list/${code}`,

          add_mill_bazar: (code) => `/user/mess-system/mill-bazar/add/${code}`,
          mess_mill_bazar_info: (code) => `/user/mess-system/mill-bazar/all-mill-bazar/${code}`,
          
          add_extra_bazar: (code) => `/user/mess-system/extra-bazar/add/${code}`,
          extra_bazar_info: (code) => `/user/mess-system/extra-bazar/all-extra-bazar/${code}`,

          add_money_collection: (code) => `/user/mess-system/money-collection/add/${code}`,
          all_money_collection: (code) => `/user/mess-system/money-collection/all-money-collection/${code}`,

          
          
          mess_mill_system: (code) => `/user/mess-system/mess-mill-system/${code}`,
          mess_report_page: (code) => `/user/mess-system/mess-report/${code}`,
          mess_history_page: (code) => `/user/mess-system/mess-history/${code}`,



          
          
        }
    },


  };
  
export default routes;
  