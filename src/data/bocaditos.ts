import { BocaditoPack, BocaditoSingle } from '../types';

export const BOCADITO_PACKS: BocaditoPack[] = [
  {
    id: "pack-fiesta-infantil",
    title: "Pack Fiesta Infantil",
    tag: "Favorito Cumpleaños",
    tagColor: "bg-secondary-fixed text-primary",
    description: "100 bocaditos surtidos: 25 alfajorcitos de maicena con manjar blanco de olla, 25 brownies con fudge artesanal, 25 empanaditas de pollo doradas y 25 bolitas de carne sazonadas.",
    price: 95.00,
    units: 100,
    serves: "Rinde: 15 a 20 invitados",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCObRg9Ak9GTNGi4KMjTkU6KIdiE9a5zAzj7vC1qijuDcHclvmnAgjOvnrwNL71HregnaLxNuTZ3oXfP-2kr-wMHphk9mbWsaTgUXhDdvnXiac1eCTEQu5A2VXhdgm6VFjvuhpBsRjl7QJLi_9UzO0MymSnIcXb57XbmHM2mv8qzkI2ujlIpcPETuDLFcJSQ62TzHiEvD3ndXDoQQvUZgzYQAr0cC8A5mGdFlOb7eFrEpYa5voufA"
  },
  {
    id: "pack-reunion-familiar",
    title: "Pack Reunión Familiar",
    tag: "Tardes de Té y Café",
    tagColor: "bg-surface-container text-primary",
    description: "50 bocaditos selectos: 15 alfajores clásicos, 15 enrolladitos de hot dog hojaldrados y 20 sanduchitos triples de pollo deshilachado con mayonesa casera.",
    price: 55.00,
    units: 50,
    serves: "Rinde: 8 a 12 invitados",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEALe_q-W7YCdHUrZFA5ZtZto8OVZkTQtT9d0PJN7VE-jTzN3HJ6UvCiuvvidSLE39Gc8Bjz-GR-LFdjG2yqnv8AjroBH9uMS_EJozfZdcdyhcz-1J0pwQ-nqZVmYV4udYKYdrp4FHStlCrLquoftUqi8r7XAS2Qm3Gpjl7ngqZy7h_VxI19M2hyIu5SnhM8DzxxpS9ROIDroZxq50FPV4N_hV7EVW8dKZfTg_Xo-Xk5VjVyHoXg"
  },
  {
    id: "pack-gran-fiesta",
    title: "Pack Gran Fiesta Prémium",
    tag: "Gala, 15 Años & Bodas",
    tagColor: "bg-gold-light text-primary",
    description: "200 bocaditos prémium: 50 mini tartaletas de frutas de estación, 50 trufas de puro cacao al 70%, 50 mini empanaditas horneadas y 50 canapés hojaldrados.",
    price: 180.00,
    units: 200,
    serves: "Rinde: 35 a 50 invitados",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByyvsq20atd1cVjw1x807bRo4QOayWL9oh5rbkiNiRPyVxIdAFGD2t7Rr47MLMUIoAHviXG_jrCJFjSKiUAEEM2zJfO20gOFbhkfTG_30l_MK5MV5s6aEZvF8PaOwkAN9emvkEp5bVsaGVQdOLUesxN7O9LxODpFj5-uRsyJmx2iofG6ycgT413-A2qHHL6TMzDh0E4ovoUwKT8sagJDSHMIXLb_Q8jl_R7ewBNv5SYaPCecvODg"
  }
];

export const BOCADITOS_SINGLES: BocaditoSingle[] = [
  {
    id: "alfajorcitos-maicena",
    name: "Alfajorcitos de Maicena con Manjar de Olla",
    type: "dulce",
    description: "Masa finísima que se deshace en boca, rellenos generosamente con manjar blanco casero cocido a fuego lento y espolvoreados con azúcar impalpable.",
    priceCiento: 60.00,
    priceMedioCiento: 35.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7uB3p3dV-CkKvjHtlZ_gERIPz1JWGf01LQqhlL74gs8itAsEeu7Wv1b0oHNvfJsmbGq1gt4lfB2gV5QinnwfieTgmIxJVPX-DegS9-imjvkBavjvtONidWRDeg9zwakH1qMTnnYiYh0TwuZZOaEr3P8g8CDHUzl-YrwPBpzCoVue42tAnq19oiUP0ZUvjNYUK7sz8TXhJ_Vmn11ZRvtMZkjEi9Z8r8dJ2HhpPVOhlgU1OG2oyRQ",
    tag: "El Más Pedido"
  },
  {
    id: "brownies-fudge",
    name: "Bocaditos de Brownie con Fudge",
    type: "dulce",
    description: "Crocantes por fuera y húmedos por dentro con cacao cusqueño y una corona de fudge artesanal a la leña.",
    priceCiento: 65.00,
    priceMedioCiento: 38.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnGQjgP9cJ6kLfsWY340pm__2EQj8kckdHP1U5ogrJO_zzTsgHXJOWsDqnFGPW-7gBpn7nflFAE_H5yP426qLxO7p3hdOcyqHvgXjm_eBuy0GtvZ_imCYjIuwidH6oc8KcF7VnQ-cmGj0LNxQqcbGSlZcwX0LCFc8PHSWCN4T0Ev9yXKE3ERlWdxvdzw1NR86cI7-q5NDkz0L5KjTzVfu9KQZydudVWVAfX3MmPEXsOmGggfZShQ"
  },
  {
    id: "empanaditas-pollo",
    name: "Mini Empanadas de Pollo al Horno",
    type: "salado",
    description: "Masa quebrada doradita con relleno jugoso de pechuga de pollo, sofrito tradicional norteño, aceituna y huevo.",
    priceCiento: 70.00,
    priceMedioCiento: 40.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCObRg9Ak9GTNGi4KMjTkU6KIdiE9a5zAzj7vC1qijuDcHclvmnAgjOvnrwNL71HregnaLxNuTZ3oXfP-2kr-wMHphk9mbWsaTgUXhDdvnXiac1eCTEQu5A2VXhdgm6VFjvuhpBsRjl7QJLi_9UzO0MymSnIcXb57XbmHM2mv8qzkI2ujlIpcPETuDLFcJSQ62TzHiEvD3ndXDoQQvUZgzYQAr0cC8A5mGdFlOb7eFrEpYa5voufA"
  },
  {
    id: "enrolladitos-hojaldre",
    name: "Enrolladitos Hojaldrados de Hot Dog",
    type: "salado",
    description: "Hojaldre crujiente de mantequilla horneado a punto con hot dog ahumado y barniz dorado.",
    priceCiento: 60.00,
    priceMedioCiento: 35.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEALe_q-W7YCdHUrZFA5ZtZto8OVZkTQtT9d0PJN7VE-jTzN3HJ6UvCiuvvidSLE39Gc8Bjz-GR-LFdjG2yqnv8AjroBH9uMS_EJozfZdcdyhcz-1J0pwQ-nqZVmYV4udYKYdrp4FHStlCrLquoftUqi8r7XAS2Qm3Gpjl7ngqZy7h_VxI19M2hyIu5SnhM8DzxxpS9ROIDroZxq50FPV4N_hV7EVW8dKZfTg_Xo-Xk5VjVyHoXg"
  }
];
