// Zarqa branch menu, transcribed from the Solo 91 menu boards (prices in Jordanian Dinar).

export type MenuItem = {
  en: string;
  ar: string;
  price: number;
  note?: string;
  noteAr?: string;
};

export type MenuSection = {
  en: string;
  ar: string;
  note?: string;
  noteAr?: string;
  items: MenuItem[];
};

export type MenuTab = {
  id: string;
  label: string;
  sections: MenuSection[];
};

const withRice = { note: 'Served with rice', noteAr: 'يقدم مع أرز' };
const withMash = {
  note: 'Served with mashed potatoes and sautéed vegetables',
  noteAr: 'يقدم مع البطاطا المهروسة والخضار سوتيه',
};

const shishaFlavours: [string, string, number][] = [
  ['Solo Special Mu‘assel', 'معسل سولو الخاص', 5.5],
  ['Two Apples (Fakher)', 'تفاحتين (فاخر)', 5.5],
  ['Two Apples (Mazaya)', 'تفاحتين (مزايا)', 5],
  ['Two Apples (Nakhla)', 'تفاحتين (نخلة)', 6],
  ['Lemon & Mint', 'ليمون ونعنع', 5],
  ['Watermelon & Mint', 'بطيخ ونعنع', 5],
  ['Pomelo & Mint', 'بوملي ونعنع', 5],
  ['Gum & Mint', 'علكة ونعنع', 5],
  ['Grape & Mint', 'عنب ونعنع', 5],
  ['Gum & Cinnamon', 'علكة وقرفة', 5],
  ['Grape & Berry', 'عنب وتوت', 5],
  ['Mango & Peach', 'مانجا ودراق', 5],
  ['Ruby Crush', 'روبي كراش', 5],
  ['Blueberry', 'بلوبيري', 5],
  ['Mastic', 'مستكة', 5],
  ['Candy', 'كاندي', 5],
  ['Kaif', 'كيف', 5],
  ['Grape', 'عنب', 5],
  ['Gum', 'علكة', 5],
  ['Cantaloupe', 'شمام', 5],
  ['Love', 'love', 5],
];

export const menu: MenuTab[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    sections: [
      {
        en: 'Breakfast',
        ar: 'فطور',
        items: [
          { en: 'Breakfast for One', ar: 'فطور (شخص)', price: 5, note: 'A selection of breakfast plates, served with tea', noteAr: 'تشكيلة من الفطور يقدم مع شاي' },
          { en: 'Breakfast Tabliyeh', ar: 'طبلية فطور', price: 10, note: 'A breakfast spread for the table, served with tea', noteAr: 'تشكيلة من الفطور يقدم مع شاي' },
          { en: 'Za‘atar Manakish', ar: 'منقوشة زعتر', price: 2.5 },
          { en: 'Halloumi Manakish', ar: 'منقوشة حلوم', price: 3.5 },
          { en: 'Mixed Cheese Manakish', ar: 'منقوشة مكس أجبان', price: 3.5 },
          { en: 'Turkey & Kashkaval Manakish', ar: 'منقوشة تيركي + قشقوان', price: 3.5 },
          { en: 'Cheese & Olive Manakish', ar: 'منقوشة جبنة + زيتون', price: 3.5 },
          { en: 'Galayet Bandora', ar: 'قلاية بندورة', price: 2 },
          { en: 'Eggs & Sausage', ar: 'بيض ونقانق', price: 2.5 },
          { en: 'Shakshuka', ar: 'شكشوكة', price: 2.5 },
          { en: 'Mfarakeh', ar: 'مفركة', price: 2 },
          { en: 'Omelette', ar: 'أومليت', price: 2 },
          { en: 'Halloumi', ar: 'حلوم', price: 3 },
          { en: 'Hummus', ar: 'حمص', price: 2 },
          { en: 'Labneh', ar: 'لبنة', price: 2 },
        ],
      },
    ],
  },
  {
    id: 'starters',
    label: 'Starters',
    sections: [
      {
        en: 'Hot Starters',
        ar: 'مقبلات ساخنة',
        items: [
          { en: 'Solo Platter', ar: 'سولو بلاتر', price: 20 },
          { en: 'Kibbeh', ar: 'كبة', price: 3 },
          { en: 'Spring Rolls', ar: 'سبرينغ رول', price: 3 },
          { en: 'Sambousek', ar: 'سمبوسك', price: 3 },
          { en: 'Boneless Chicken', ar: 'بونلس', price: 4.5, note: 'BBQ, honey mustard, dynamite or sweet chili', noteAr: 'باربكيو أو هاني ماسترد أو داينمايت أو سويت شيلي' },
          { en: 'Crazy Chicken', ar: 'كريزي تشكن', price: 4 },
          { en: 'Solo Nachos', ar: 'سولو ناتشوز', price: 5 },
          { en: 'Dynamite Shrimp', ar: 'داينمايت شريمب', price: 5 },
          { en: 'French Fries', ar: 'بطاطا', price: 2.25 },
          { en: 'Potato Wedges', ar: 'بطاطا ودجز', price: 3 },
          { en: 'Halloumi, Grilled or Fried', ar: 'حلوم مشوي أو مقلي', price: 3 },
          { en: 'Curly Fries', ar: 'بطاطا كيرلي', price: 3.5 },
        ],
      },
      {
        en: 'Cold Starters',
        ar: 'مقبلات باردة',
        items: [
          { en: 'Hummus', ar: 'حمص', price: 2 },
          { en: 'Mutabbal', ar: 'متبل', price: 2 },
          { en: 'Stuffed Vine Leaves', ar: 'ورق عنب', price: 3.5 },
        ],
      },
      {
        en: 'Salads',
        ar: 'سلطات',
        items: [
          { en: 'Solo Salad', ar: 'سلطة سولو', price: 6 },
          { en: 'Arugula Salad', ar: 'سلطة الجرجير', price: 3.5 },
          { en: 'Caesar Salad', ar: 'سيزر سالاد', price: 4 },
          { en: 'Greek Salad', ar: 'سلطة يونانية', price: 3.5 },
          { en: 'Fattoush', ar: 'فتوش', price: 3.5 },
          { en: 'Quinoa Tabbouleh', ar: 'تبولة كينوا', price: 4 },
          { en: 'Bulgur Tabbouleh', ar: 'تبولة برغل', price: 3.5 },
        ],
      },
      {
        en: 'Soups',
        ar: 'شوربات',
        items: [
          { en: 'Mushroom Soup', ar: 'شوربة فطر', price: 4 },
          { en: 'Chicken Soup', ar: 'شوربة دجاج', price: 4 },
          { en: 'Seafood Soup', ar: 'شوربة مأكولات بحرية', price: 5 },
          { en: 'Vegetable Soup', ar: 'شوربة خضار', price: 4 },
        ],
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    sections: [
      {
        en: 'Main Dishes',
        ar: 'أطباق رئيسية',
        ...withMash,
        items: [
          { en: 'Beef Steak with Mushroom', ar: 'ستيك لحم بالفطر', price: 14 },
          { en: 'Beef Medallions', ar: 'بيف ميداليون', price: 12 },
          { en: 'Ribeye Steak', ar: 'ريب آي ستيك', price: 20 },
          { en: 'Chicken with Mushroom & Cream', ar: 'دجاج بالفطر والكريمة', price: 7.5 },
          { en: 'Lemon Chicken', ar: 'دجاج بالليمون', price: 7.5 },
          { en: 'Salmon', ar: 'سالمون', price: 9 },
        ],
      },
      {
        en: 'Arabic Kitchen',
        ar: 'المطبخ العربي',
        ...withRice,
        items: [
          { en: 'Kofta with Tahini', ar: 'كفتة بالطحينية', price: 7 },
          { en: 'Kofta with Tomato', ar: 'كفتة بالبندورة', price: 7 },
          { en: 'Shishbarak', ar: 'ششبرك', price: 7 },
        ],
      },
      {
        en: 'Western Kitchen',
        ar: 'المطبخ الغربي',
        ...withRice,
        items: [
          { en: 'Chicken Stroganoff', ar: 'تشكن استراغنوف', price: 8 },
          { en: 'Beef Stroganoff', ar: 'بيف استراغنوف', price: 8 },
          { en: 'Creamy Chicken Clay Pot', ar: 'فخارة تشكن كريمي', price: 8 },
        ],
      },
      {
        en: 'Chinese Kitchen',
        ar: 'المطبخ الصيني',
        ...withRice,
        items: [
          { en: 'Cashew Chicken', ar: 'تشيكن كاشو', price: 8 },
          { en: 'Sweet & Sour (Chicken or Beef)', ar: 'سويت ساور (تشيكن أو بيف)', price: 8 },
          { en: 'Chow Mein (Chicken or Beef)', ar: 'شاومين (تشيكن أو بيف)', price: 8 },
          { en: 'Noodles', ar: 'نودلز', price: 5 },
        ],
      },
      {
        en: 'Indian Kitchen',
        ar: 'المطبخ الهندي',
        ...withRice,
        items: [
          { en: 'Chicken Masala', ar: 'تشيكن ماسالا', price: 6 },
          { en: 'Butter Chicken', ar: 'بتر تشيكن', price: 6 },
        ],
      },
      {
        en: 'Sajiyeh',
        ar: 'صاجيات',
        items: [
          { en: 'Beef Sajiyeh', ar: 'صاجية لحمة', price: 10 },
          { en: 'Chicken Sajiyeh', ar: 'صاجية دجاج', price: 6.5 },
          { en: 'Chicken Fajita Sajiyeh', ar: 'صاجية فاهيتا (دجاج)', price: 6.5 },
          { en: 'Beef Fajita Sajiyeh', ar: 'صاجية فاهيتا (لحمة)', price: 8 },
        ],
      },
    ],
  },
  {
    id: 'pizza-pasta',
    label: 'Pizza & Pasta',
    sections: [
      {
        en: 'Pizza',
        ar: 'بيتزا ومعجنات',
        items: [
          { en: 'Pizza Solo', ar: 'بيتزا سولو', price: 6 },
          { en: 'Shrimp Pizza', ar: 'بيتزا شريمب', price: 6 },
          { en: 'Supreme Pizza', ar: 'بيتزا سوبريم', price: 5 },
          { en: 'Vegetable Pizza', ar: 'بيتزا خضار', price: 5 },
          { en: 'Margherita Pizza', ar: 'بيتزا مارغريتا', price: 5 },
          { en: 'Alfredo Pizza', ar: 'بيتزا الفريدو', price: 5 },
          { en: 'Ranch Pizza', ar: 'بيتزا رانش', price: 5 },
          { en: 'BBQ Pizza', ar: 'بيتزا باربكيو', price: 5 },
          { en: 'Four Seasons Pizza', ar: 'بيتزا فور سيزون', price: 5 },
          { en: 'Pepperoni Pizza', ar: 'بيتزا ببروني', price: 5 },
        ],
      },
      {
        en: 'Pasta',
        ar: 'باستا',
        items: [
          { en: 'Fettuccine Alfredo', ar: 'فوتتشيني الفريدو', price: 4.5 },
          { en: 'Penne Pesto', ar: 'بنه بيستو', price: 4.5 },
          { en: 'Penne Arrabbiata', ar: 'بنه أرابياتا', price: 4 },
          { en: 'Spaghetti Bolognese', ar: 'سباغيتي بولونيز', price: 4 },
          { en: 'Pesto Lasagna', ar: 'لازانيا بيستو', price: 7 },
        ],
      },
      {
        en: 'Burgers & Sandwiches',
        ar: 'سناكات',
        items: [
          { en: 'Chicken Fajita Meal', ar: 'وجبة فاهيتا دجاج', price: 4.25 },
          { en: 'Chicken Burger', ar: 'تشيكن برغر', price: 4.5 },
          { en: 'Chicken Mushroom', ar: 'تشيكن ماشروم', price: 4.25 },
          { en: 'Zinger', ar: 'زنجر', price: 4.25 },
          { en: 'Hot Dog', ar: 'هوت دوغ', price: 3.75 },
          { en: 'Grilled Shawarma', ar: 'شاورما جريل', price: 4 },
          { en: 'Classic Burger', ar: 'كلاسيك برغر', price: 4.5 },
          { en: 'Beef Bacon Burger', ar: 'بيف بيكن برغر', price: 5.5 },
          { en: 'Solo Cheeseburger', ar: 'سولو تشيز برغر', price: 7 },
          { en: 'Mexican Burger', ar: 'مكسيكان برغر', price: 5 },
          { en: 'Mushroom Burger', ar: 'ماشروم برغر', price: 5.5 },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    sections: [
      {
        en: 'Desserts',
        ar: 'ديزيرت',
        items: [
          { en: 'Cheesecake', ar: 'تشيز كيك', price: 4 },
          { en: 'San Sebastián Cheesecake', ar: 'سان سبستيان', price: 4 },
          { en: 'Red Velvet', ar: 'ريد فيلفت', price: 3.5 },
          { en: 'Brownies', ar: 'براونيز', price: 4 },
          { en: 'Japanese Cake', ar: 'كيك ياباني', price: 4 },
          { en: 'Turkish Cake', ar: 'تيركش كيك', price: 4 },
          { en: 'Pancakes', ar: 'بان كيك', price: 5 },
          { en: 'Nutella Crêpe', ar: 'كريب نوتيلا', price: 3.5 },
          { en: 'Lotus Crêpe', ar: 'كريب لوتس', price: 3.5 },
          { en: 'Pistachio Crêpe', ar: 'كريب بستاشيو', price: 4 },
          { en: 'Nutella Waffle', ar: 'وافل نوتيلا', price: 3.25 },
          { en: 'Lotus Waffle', ar: 'وافل لوتس', price: 3.25 },
          { en: 'Pistachio Waffle', ar: 'وافل بستاشيو', price: 4 },
          { en: 'Fettuccine Crêpe', ar: 'كريب فوتيشيني', price: 3.5 },
          { en: 'Umm Ali', ar: 'أم علي', price: 3.5 },
          { en: 'Ice Cream', ar: 'بوظة', price: 3 },
          { en: 'Fruit Salad', ar: 'فروت سلاد', price: 4 },
          { en: 'Special Fruit Salad', ar: 'سبيشال فروت سلاد', price: 6 },
          { en: 'Add Fruit', ar: 'إضافة فواكه', price: 1.25 },
        ],
      },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    sections: [
      {
        en: 'Hot Drinks',
        ar: 'مشروبات ساخنة',
        items: [
          { en: 'Turkish Coffee, Small — Plain', ar: 'قهوة تركية صغير (سادة)', price: 2.25 },
          { en: 'Turkish Coffee, Large — Plain', ar: 'قهوة تركية كبير (سادة)', price: 2.75 },
          { en: 'Turkish Coffee, Small — Medium', ar: 'قهوة تركية صغير (وسط)', price: 2.25 },
          { en: 'Turkish Coffee, Large — Medium', ar: 'قهوة تركية كبير (وسط)', price: 2.75 },
          { en: 'Turkish Coffee, Small — Sweet', ar: 'قهوة تركية صغير (حلوة)', price: 2.25 },
          { en: 'Turkish Coffee, Large — Sweet', ar: 'قهوة تركية كبير (حلوة)', price: 2.75 },
          { en: 'Solo Coffee', ar: 'سولو كوفي', price: 4 },
          { en: 'American Coffee', ar: 'أمريكان', price: 2.5 },
          { en: 'Americano', ar: 'أميريكانو', price: 2.5 },
          { en: 'Espresso', ar: 'إسبريسو', price: 2.5 },
          { en: 'Double Espresso', ar: 'دبل إسبريسو', price: 3 },
          { en: 'Caramel Macchiato', ar: 'كراميل ميكاتو', price: 3.5 },
          { en: 'Mocha', ar: 'موكا', price: 3.5 },
          { en: 'Dark Mocha', ar: 'موكا دارك', price: 3.5 },
          { en: 'White Mocha', ar: 'موكا وايت', price: 3.5 },
          { en: 'Latte', ar: 'لاتيه', price: 3 },
          { en: 'Hot Spanish Latte', ar: 'هوت سبانش لاتيه', price: 3.5 },
          { en: 'Cappuccino', ar: 'كابتشينو', price: 3 },
          { en: 'French Coffee', ar: 'قهوة فرنسية', price: 3.5 },
          { en: 'Greek Coffee', ar: 'جريك كوفي', price: 3.5 },
          { en: 'Nescafé', ar: 'نسكافيه', price: 2.75 },
          { en: 'Affogato', ar: 'أفوكاتو', price: 3 },
          { en: 'Hot Chocolate', ar: 'هوت تشوكلت', price: 3 },
          { en: 'Hot Oreo', ar: 'هوت أوريو', price: 3.5 },
          { en: 'Hot Lotus', ar: 'هوت لوتس', price: 3.5 },
          { en: 'Hot Kinder', ar: 'هوت كندر', price: 4 },
          { en: 'Hot Nutella', ar: 'هوت نوتيلا', price: 4 },
          { en: 'Tea', ar: 'شاي', price: 1.5 },
          { en: 'Herbal Tea', ar: 'أعشاب', price: 1.75 },
          { en: 'Tea Pot, Small', ar: 'إبريق شاي صغير', price: 3 },
          { en: 'Tea Pot, Large', ar: 'إبريق شاي كبير', price: 5 },
        ],
      },
      {
        en: 'Iced Coffee',
        ar: 'قهوة مثلجة',
        items: [
          { en: 'Iced Shaken', ar: 'آيس شيكن', price: 4 },
          { en: 'Iced Latte', ar: 'آيس لاتيه', price: 3.5 },
          { en: 'Iced Spanish Latte', ar: 'آيس سبانش لاتيه', price: 4 },
          { en: 'Iced Matcha Latte', ar: 'آيس ماتشا لاتيه', price: 3.5 },
          { en: 'Spanish Matcha Latte', ar: 'سبانيش ماتشا لاتيه', price: 4 },
          { en: 'Frappuccino', ar: 'فرابتشينو', price: 3.5, note: 'Caramel, vanilla or chocolate', noteAr: 'كراميل - فانيلا - تشوكلت' },
          { en: 'Iced Mocha', ar: 'آيس موكا', price: 3.5, note: 'White or chocolate', noteAr: 'وايت - شوكلت' },
          { en: 'Iced Salted Caramel', ar: 'آيس سولتد كراميل', price: 3.5 },
          { en: 'Iced Caramel Macchiato', ar: 'آيس كراميل ميكاتو', price: 3.5 },
          { en: 'Iced American', ar: 'آيس أمريكان', price: 2.5 },
          { en: 'Iced Americano', ar: 'آيس أمريكانو', price: 2.5 },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    sections: [
      {
        en: 'Mojito',
        ar: 'موهيتو',
        items: [
          { en: 'Solo Mojito', ar: 'موهيتو سولو', price: 5 },
          { en: 'Red Bull Mojito', ar: 'موهيتو ريد بل', price: 4.5 },
          { en: 'Code Red Mojito', ar: 'موهيتو كود ريد', price: 4.5 },
          { en: 'Boom Boom Mojito', ar: 'موهيتو بوم بوم', price: 4 },
          { en: 'Soda Mojito', ar: 'موهيتو صودا', price: 3 },
          { en: '7UP Mojito', ar: 'موهيتو سفن أب', price: 2.5 },
        ],
      },
      {
        en: 'Mocktails',
        ar: 'موكتيل',
        items: [
          { en: 'Solo Mocktail', ar: 'سولو موكتيل', price: 5 },
          { en: 'Piña Colada', ar: 'بيناكولادا', price: 4 },
          { en: 'Honey Moon', ar: 'هاني مون', price: 4 },
          { en: 'Mango Giraro', ar: 'مانجو جيرارو', price: 4 },
          { en: 'Lemon Spark', ar: 'ليمون سبارك', price: 4 },
          { en: 'Lemon Cream', ar: 'ليمون كريم', price: 4 },
          { en: 'Rocca Mocktail', ar: 'روكا موكتيل (جرجير)', price: 4, note: 'With arugula', noteAr: 'جرجير' },
          { en: 'Avocado', ar: 'أفوكادو', price: 5 },
        ],
      },
      {
        en: 'Milkshakes',
        ar: 'ميلك شيك',
        items: [
          { en: 'Chocolate', ar: 'ميلك شيك تشوكلت', price: 3.5 },
          { en: 'Vanilla', ar: 'ميلك شيك فانيلا', price: 3.5 },
          { en: 'Croquant', ar: 'ميلك شيك كروكان', price: 3.5 },
          { en: 'Strawberry', ar: 'ميلك شيك فراولة', price: 3.5 },
          { en: 'Cheesecake', ar: 'ميلك شيك تشيزكيك', price: 3.5 },
          { en: 'Arabiya', ar: 'ميلك شيك عربية', price: 3.5 },
          { en: 'Oreo', ar: 'ميلك شيك أوريو', price: 3.5 },
          { en: 'Snickers', ar: 'ميلك شيك سنيكرز', price: 3.5 },
          { en: 'Ferrero Rocher', ar: 'ميلك شيك فيريرو روشيه', price: 4.5 },
          { en: 'Pistachio', ar: 'ميلك شيك بستاشيو', price: 4.5 },
          { en: 'Nutella', ar: 'ميلك شيك نوتيلا', price: 4.5 },
          { en: 'Lotus', ar: 'ميلك شيك لوتس', price: 4.5 },
        ],
      },
      {
        en: 'Smoothies',
        ar: 'سموذي',
        items: [
          { en: 'Kaif', ar: 'كيف', price: 3.5 },
          { en: 'Kiwi & Passion Fruit', ar: 'كيوي وباشن فروت', price: 3.5 },
          { en: 'Mango & Passion Fruit', ar: 'مانجو وباشن فروت', price: 3.5 },
          { en: 'Kiwi & Mango', ar: 'كيوي ومانجا', price: 3.5 },
          { en: 'Passion Fruit', ar: 'باشن فروت', price: 3.5 },
          { en: 'Raspberry', ar: 'راز بيري', price: 3.5 },
          { en: 'Blueberry', ar: 'بلو بيري', price: 3.5 },
          { en: 'Kiwi & Strawberry', ar: 'كيوي وفراولة', price: 3.5 },
          { en: 'Kiwi & Lemon', ar: 'كيوي وليمون', price: 3.5 },
          { en: 'Strawberry & Mint', ar: 'فراولة ونعنع', price: 3.5 },
          { en: 'Tropical Fruit', ar: 'تروبيكال فروت', price: 3.5 },
          { en: 'Mixed Berry', ar: 'مكس بيري', price: 3.5 },
        ],
      },
      {
        en: 'Fresh Juice',
        ar: 'عصير طبيعي',
        items: [
          { en: 'Orange', ar: 'برتقال', price: 3.5 },
          { en: 'Lemon', ar: 'ليمون', price: 3.5 },
          { en: 'Lemon & Mint', ar: 'ليمون ونعنع', price: 3.5 },
          { en: 'Strawberry', ar: 'فراولة', price: 3.5 },
          { en: 'Mango', ar: 'منجا', price: 3.5 },
          { en: 'Guava', ar: 'جوافة', price: 3.5 },
          { en: 'Pineapple', ar: 'أناناس', price: 3.5 },
        ],
      },
      {
        en: 'Fruit Cocktails',
        ar: 'كوكتيل',
        items: [
          { en: 'Solo Cocktail', ar: 'سولو كوكتيل', price: 5 },
          { en: 'Banana, Strawberry & Milk', ar: 'موز وفراولة وحليب', price: 3.5 },
          { en: 'Banana & Milk', ar: 'موز وحليب', price: 3.5 },
          { en: 'Banana & Orange', ar: 'موز وبرتقال', price: 3.5 },
          { en: 'Four Seasons', ar: 'فور سيزون', price: 4 },
          { en: 'Love Story', ar: 'لف ستوري', price: 4 },
        ],
      },
      {
        en: 'Cold Drinks',
        ar: 'مشروبات باردة',
        items: [
          { en: 'Iced Tea', ar: 'آيس تي', price: 3, note: 'Mango, peach, blueberry, passion fruit or raspberry', noteAr: 'منجا - خوخ - بلوبيري - باشن فروت - رازبيري' },
          { en: 'Red Bull', ar: 'ريد بول', price: 3.5 },
          { en: 'Code Red', ar: 'كود ريد', price: 3.5 },
          { en: 'Boom Boom', ar: 'بوم بوم', price: 3 },
          { en: 'Soda', ar: 'صودا', price: 2.5 },
          { en: 'Barbican', ar: 'باربيكان', price: 2.5 },
          { en: 'Soft Drink', ar: 'سوفت درنك', price: 1.5 },
          { en: 'Mineral Water', ar: 'مياه معدنية', price: 0.5 },
        ],
      },
    ],
  },
  {
    id: 'shisha',
    label: 'Shisha',
    sections: [
      {
        en: 'Classic Shisha',
        ar: 'أراجيل كلاسيك',
        note: 'Add a glass head for 1.00 JD',
        noteAr: 'إضافة راس زجاجي ١ دينار',
        items: [
          ...shishaFlavours.map(([en, ar, price]) => ({ en, ar, price })),
          { en: 'Head Change', ar: 'غيار راس', price: 1.5 },
        ],
      },
      {
        en: 'Fresh Shisha',
        ar: 'أراجيل فريش',
        items: [
          ...shishaFlavours.map(([en, ar]) => ({ en: `Fresh ${en}`, ar: `فريش ${ar}`, price: 8 })),
          { en: 'Fresh Head Change', ar: 'فريش - غيار راس', price: 8 },
        ],
      },
    ],
  },
];

export const signatures: MenuItem[] = [
  { en: 'Solo Platter', ar: 'سولو بلاتر', price: 20 },
  { en: 'Solo Coffee', ar: 'سولو كوفي', price: 4 },
  { en: 'Solo Mojito', ar: 'موهيتو سولو', price: 5 },
  { en: 'Solo Mocktail', ar: 'سولو موكتيل', price: 5 },
  { en: 'Solo Cheeseburger', ar: 'سولو تشيز برغر', price: 7 },
  { en: 'Solo Special Mu‘assel', ar: 'معسل سولو الخاص', price: 5.5 },
];

export const formatPrice = (price: number) => price.toFixed(2);
