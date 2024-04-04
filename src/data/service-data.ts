import {StaticImageData} from 'next/image';
// home 1
// home 2
import icon_5 from '@/assets/images/icon/icon_06.svg';
import icon_6 from '@/assets/images/icon/icon_07.svg';
import icon_7 from '@/assets/images/icon/icon_08.svg';
// home 3
// home 4
import icon_12 from '@/assets/images/icon/icon_40.svg';
import icon_13 from '@/assets/images/icon/icon_41.svg';
import icon_14 from '@/assets/images/icon/icon_42.svg';
// home 5


// data type 
interface IService {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string;
    page: string;
}

const service_data: IService[] = [
    // home 2
    {
        id: 1,
        icon: icon_5,
        title: 'Business Setup',
        desc: 'Comprehensive business setup solutions tailored to suit both Freezone and Mainland requirements.',
        page: 'home-main'
    },
    {
        id: 2,
        icon: icon_6,
        title: 'VAT Registration and Filing',
        desc: 'End-to-end solutions, including VAT registration, compliance, reporting, and filing.',
        page: 'home-main'
    },
    {
        id: 3,
        icon: icon_7,
        title: 'IT & Digital Marketing',
        desc: 'Range of solutions including website development, digital marketing, SEO, and social media marketing.',
        page: 'home-main'
    },
    {
        id: 4,
        icon: icon_13,
        title: 'Auditing',
        desc: 'Professional auditing services to ensure the accuracy and integrity of your financial records.',
        page: 'services'
    },
    {
        id: 5,
        icon: icon_12,
        title: 'License Renewal',
        desc: 'Timely and hassle-free renewal of your business licenses. Focus on your core operations without any disruptions.',
        page: 'services'
    },
    {
        id: 14,
        icon: icon_14,
        title: 'PRO Services',
        desc: 'Streamline government-related processes, minimising administrative burdens and ensuring compliance.',
        page: 'services'
    },
]

export default service_data;