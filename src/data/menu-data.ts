import {IMenu} from "@/types/menu-d-t";

const menu_data: IMenu[] = [
    {
        id: 1,
        link: '/',
        title: 'Home',
    },
    {
        id: 2,
        title: 'Mainland',
        link: '#',
        dropdown: true,
        dropdown_menus: [
            {link: '/mainland/dubai', title: 'Dubai Mainland'},
            {link: '/mainland/dubai/required-documents', title: 'Required Documents'},
        ],
    },
    {
        id: 3,
        title: 'Freezone',
        link: '#',
        dropdown: true,
        category: 'freezone',
        dropdown_menus: [
            {link: '/freezone/dubai', title: 'Dubai Freezone'},
            {link: '/freezone/shams', title: 'Shams Freezone'},
            {link: '/freezone/amc', title: 'AMC Freezone'},
            {link: '/freezone/rakez', title: 'Rakez Freezone'},
            {link: '/freezone/ifza', title: 'Ifza Freezone'},
            {link: '/freezone/spc', title: 'SPC Freezone'},
        ],
    },
    {
        id: 4,
        link: '/services',
        title: 'Services',
        /*mega_menu:true,
        mega_menus:[
          {
            id:1,
            menus:[
              {link:'/services',title:'Service v-1'},
              {link:'/service-v2',title:'Service v-2'},
              {link:'/services',title:'Service Details'},
              {link:'/team',title:'Team V-1'},
              {link:'/team',title:'Team V-2'},
              {link:'/team-details',title:'Team Details'}
            ]
          },
          {
            id:2,
            menus:[
              {link:'/about-us',title:'About Us V-1'},
              {link:'/about-us',title:'About Us V-2'},
              {link:'/testimonial',title:'Testimonial'},
              {link:'/pricing',title:'Pricing'},
              {link:'/faq',title:'FAQ’s'},
              {link:'/404',title:'404'},
            ]
          },
          {
            id:3,
            menus:[
              {link:'/project-v1',title:'Project V-1'},
              {link:'/project-v2',title:'Project V-2'},
              {link:'/project-v3',title:'Project V-3'},
              {link:'/[slug]',title:'Project Details V-1'},
              {link:'/project-details-v2',title:'Project Details V-2'},
            ]
          }
        ]*/
    },
    {
        id: 6,
        link: '/blog',
        title: 'Blog',
    },
    {
        id: 7,
        link: '/about-us',
        title: 'About Us',
    },
    {
        id: 8,
        link: '/contact',
        title: 'Contact'
    }
]

export default menu_data;

export const freezoneMenu = menu_data.find((item) => item.category === 'freezone')?.dropdown_menus;
