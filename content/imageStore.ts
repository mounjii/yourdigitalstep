// To add a new image:
// 1. Add a new key-value pair to the imageStore object below.
// 2. Add the new key to the ImageKey type union.
// 3. Use the new key in `i18n.ts` for any image, screenshot, or avatar field.

export type ImageKey = 
  | 'portfolio_ambrees_main'
  | 'portfolio_ambrees_ss1'
  | 'portfolio_ambrees_ss2'
  | 'portfolio_ambrees_ss3'
  | 'portfolio_curraterra_main'
  | 'portfolio_curraterra_ss1'
  | 'portfolio_curraterra_ss2'
  | 'portfolio_curraterra_ss3'
  | 'portfolio_connect_main'
  | 'portfolio_connect_ss1'
  | 'portfolio_connect_ss2'
  | 'portfolio_connect_ss3'
  | 'portfolio_hydrocycle_main'
  | 'portfolio_hydrocycle_ss1'
  | 'portfolio_hydrocycle_ss2'
  | 'portfolio_hydrocycle_ss3'
  | 'portfolio_zenith_main'
  | 'portfolio_zenith_ss1'
  | 'portfolio_zenith_ss2'
  | 'portfolio_zenith_ss3'
  | 'portfolio_vita_main'
  | 'portfolio_vita_ss1'
  | 'portfolio_vita_ss2'
  | 'portfolio_vita_ss3'
  | 'testimonial_angel_unigwe_avatar'
  | 'testimonial_piotr_kwiatow_avatar'
  | 'testimonial_youssef_alami_avatar'
  | 'testimonial_marie_durond_avatar'
  | 'testimonial_james_camerron_avatar'
  | 'testimonial_fatima_benali_avatar';

export const imageStore: Record<ImageKey, string> = {
  // Portfolio: Ambrees
  portfolio_ambrees_main: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_ambrees_ss1: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_ambrees_ss2: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_ambrees_ss3: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  
  // Portfolio: Curra Terra
  portfolio_curraterra_main: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_curraterra_ss1: "https://images.unsplash.com/photo-1512428209232-901e1738d813?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_curraterra_ss2: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_curraterra_ss3: "https://images.unsplash.com/photo-1490645935967-10de6ba17021?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",

  // Portfolio: Connect Platform
  portfolio_connect_main: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_connect_ss1: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_connect_ss2: "https://images.unsplash.com/photo-1555774698-0b77e0ab232f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_connect_ss3: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",

  // Portfolio: Hydrocycle
  portfolio_hydrocycle_main: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_hydrocycle_ss1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_hydrocycle_ss2: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_hydrocycle_ss3: "https://images.unsplash.com/photo-1522071820081-009f0129c710?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  
  // Portfolio: Zenith
  portfolio_zenith_main: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_zenith_ss1: "https://images.unsplash.com/photo-1642256291389-03415232882a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_zenith_ss2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_zenith_ss3: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",

  // Portfolio: Vita
  portfolio_vita_main: "https://images.unsplash.com/photo-1601758176587-7e4620a1a8a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_vita_ss1: "https://images.unsplash.com/photo-1587213606995-58b1a3823f66?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_vita_ss2: "https://images.unsplash.com/photo-1599658880115-352ce8a4c1cb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  portfolio_vita_ss3: "https://images.unsplash.com/photo-1586724237569-34b9d3725613?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",

  // Testimonials
  testimonial_angel_unigwe_avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  testimonial_piotr_kwiatow_avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  testimonial_youssef_alami_avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  testimonial_marie_durond_avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  testimonial_james_camerron_avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  testimonial_fatima_benali_avatar: "https://randomuser.me/api/portraits/women/24.jpg",
};