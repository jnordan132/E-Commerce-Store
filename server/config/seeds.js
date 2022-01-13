const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Nike' },
    { name: 'Jordan' },
    { name: 'Converse' },
    { name: 'Adidas' },
    { name: 'Vans' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Nike Air Max 90',
      description:
        'First a legend on the track and then a legend in the streets, the Nike Air Max 90 By You brings the comfort of Air to the masses.',
      image: 'Nike-1.png',
      category: categories[0]._id,
      price: 140,
      quantity: 114
    },
    {
      name: 'Nike Air Force 1 Low',
      description:
        'The Nike Air Force 1 Low became an instant icon after its debut in 1982. Now you can make this classic your own with a color palette inspired by the ‘80s and ‘90s and premium materials including smooth and rippled leather and a new, matching sidewall selection. It’s time to create a look that speaks to you.',
      image: 'Nike-2.png',
      category: categories[0]._id,
      price: 110,
      quantity: 322
    },
    {
      name: 'Nike Air Max 95',
      category: categories[0]._id,
      description:
        'Celebrate workwear’s wide appeal with a new take on the Nike Air Max 95. Utilitarian materials like polished twill and leather are rugged and durable with an undeniable nod to runway style. Perfectly understated details like contrast stitching and gradient layers add a new level of depth to this long-time favorite.',
      image: 'Nike-3.png',
      price: 180,
      quantity: 243
    },
    {
      name: 'Nike Waffle One',
      category: categories[0]._id,
      description:
        'The Nike Waffle One is the original racer. Go for a hyper-heritage look or modernize with colors and details inspired by long days at the beach. OG materials and colors straight from the vault blend seamlessly with innovative materials and finishes for a look that’s 100% you.',
      image: 'Nike-4.png',
      price: 130,
      quantity: 106
    },
    {
      name: 'Nike React Live',
      category: categories[0]._id,
      description:
        'The Nike React Live simulates the thrills of a ropes course without ever leaving the ground. The cable system that runs around the shoe nods to an adrenaline-pumping adventure. Choose “vertigo” mesh for a mind-bending visual experience. Outdoor-inspired laces and anodized aglets that draw on the look of a classic carabiner finish off this unique salute to the great outdoors.',
      image: 'Nike-5.png',
      price: 120,
      quantity: 247
    },
    {
      name: 'Nike Air Max 97',
      category: categories[0]._id,
      description:
        'Bring back the nostalgia of long summer days from your childhood with a hot color palette and a wavy mesh that alludes to the mesmerizing optical illusion of heat rising off the blacktop. Classic layers get a new level of appeal with material choices, pop colors and metallic silver that hearkens back to the real OG: Nike Air Max 97.',
      image: 'Nike-6.png',
      price: 190,
      quantity: 91
    },
    {
      name: 'Nike Air Presto',
      category: categories[0]._id,
      description:
        'The Nike Air Presto Shoe elevates a popular runner with modern innovation. Color the snug bootie and iconic cage, then dial up your design with speckles and color on the heel cushioning. Finish it off with a short personal message on the heel.',
      image: 'Nike-7.png',
      price: 150,
      quantity: 203
    },
    {
      name: 'Nike React Vision',
      category: categories[0]._id,
      description:
        'Inspired by the mythical creatures of Mexican folk art, the Nike React Vision By You serves up a palette of textures, graphics and materials that let you express your wild side. Add surreal comfort with Nike React foam and a personal message on the heel clip for a shoe that could only come from the dream world.',
      image: 'Nike-8.png',
      price: 150,
      quantity: 187
    },
    {
      name: 'Air Jordan 1 Low',
      category: categories[1]._id,
      description: "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. It's made for casual mode, with an iconic design that goes with everything and never goes out of style.",
      image: 'Jordan-1.png',
      price: 110,
      quantity: 118
    },
    {
      name: 'Air Jordan 1 Mid',
      category: categories[1]._id,
      description:
        'The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness. Fresh color trims the clean, classic materials, injecting some newness into the familiar design.',
      image: 'Jordan-2.png',
      price: 120,
      quantity: 162
    },
    {
      name: 'Air Jordan 4 Retro',
      category: categories[1]._id,
      description:
        "The Air Jordan 4 Retro is inspired by the original metallic colors featured on the Air Jordan 1 from 1985. Boldly original, the now-iconic colors continue to reinforce the Brand's peerless heritage.",
      image: 'Jordan-3.png',
      price: 190,
      quantity: 89
    },
    {
      name: 'Jordan Delta 2',
      category: categories[1]._id,
      description:
        "The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability, comfort and an attitude that's Jordan to the core. We updated design lines and swapped out some components, but the idea is the same as the first Delta. The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that's both adventurous and iconic.",
      image: 'Jordan-4.png',
      price: 130,
      quantity: 206
    },
    {
      name: 'Jordan Point Lane',
      category: categories[1]._id,
      description:
        "The Jordan Point Lane mixes elements from game shoes MJ wore during 3 of his most memorable seasons. Named for his Chicago address, this mash-up pulls in bits and pieces from the AJ3, AJ6 and AJ11 to create a shoe that's inspired by greatness and uncompromising in its comfort.",
      image: 'Jordan-5.png',
      price: 140,
      quantity: 110
    },
    {
      name: 'Jordan MA2',
      category: categories[1]._id,
      description:
        "Shatter the sneaker status quo in the Jordan MA2. Made with a mix of suede, full-grain leather and a variety of textiles, it's got unconventional labels, technical micro-graphics and raw foam edges for a balance of new and classic. Easy to get on and off, it wears with just about anything.",
      image: 'Jordan-6.png',
      price: 125,
      quantity: 291
    },
    {
      name: 'Air Jordan 11 CMFT Low',
      category: categories[1]._id,
      description:
        'The Air Jordan 11 CMFT Low looks to the future of flight with comfort in mind. The soft leather toe cap and mudguard and webbing lace loops replicate distinct features from the original AJ11. Soft, smooth Cushlon foam and Zoom Air cushioning make every step comfortable.',
      image: 'Jordan-7.png',
      price: 120,
      quantity: 72
    },
    {
      name: 'Jordan Air NFH',
      category: categories[1]._id,
      description:
        'The Jordan Air NFH is an everyday sneaker with basketball in its DNA. Details like visible Air cushioning, stitched overlays and herringbone traction hook to the brand’s performance pedigree. Lightweight materials and an easy fit make it comfortable.',
      image: 'Jordan-8.png',
      price: 110,
      quantity: 104
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/Black',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-1.png',
      price: 55,
      quantity: 107
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/White',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-2.png',
      price: 55,
      quantity: 121
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/Blue',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-3.png',
      price: 55,
      quantity: 143
    },
    {
      name: 'Converse Chuck Taylor All Star Low Top/Red',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-4.jpg',
      price: 60,
      quantity: 136
    },
    {
      name: 'Converse Chuck Taylor All Star High Top/Black',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-5.png',
      price: 60,
      quantity: 163
    },
    {
      name: 'Converse Chuck Taylor All Star High Top/White',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-6.png',
      price: 60,
      quantity: 194
    },
    {
      name: 'Converse Chuck Taylor All Star High Top/Blue',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-7.png',
      price: 60,
      quantity: 210
    },
    {
      name: 'Converse Chuck Taylor All Star High Top/Red',
      category: categories[2]._id,
      description:
        'You need a style to rely on. The Chuck Taylor All-Star is a staple: the high-top and oxford silhouettes stay simply classic, while the white laces and star ankle patch give a nod to the legacy of the Chuck. This is the go-with-everything go-to that you won’t get sick of going to. Stock up.',
      image: 'Converse-8.jpg',
      price: 60,
      quantity: 231
    },
    {
      name: 'Alphabet Blocks',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
    // {
    //   name: 'Alphabet Blocks',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 600
    // },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
