"use strict";

/*
 * Menú digital bilingüe.
 * Una sola fuente de catálogo: ID, precio e imagen no se duplican por idioma.
 */
const IMG_BASE = "img/";
const WHATSAPP_NUMBER = "593983237560";
const SUPPORTED_LANGUAGES = new Set(["es", "en"]);
const STORAGE_KEY = "fb_lang";

const I18N = {
  es: {
    documentTitle: "Menú Digital | Floresta Brava",
    metaDescription: "Menú digital de Floresta Brava. Almuerzos, desayunos, mariscos, carnes, pollos y bebidas. Pide por WhatsApp.",
    ogTitle: "Menú Digital | Floresta Brava",
    ogDescription: "Menú digital de Floresta Brava. Pide por WhatsApp.",
    skipLink: "Saltar al contenido",
    homeAria: "Ir al inicio",
    openCategoriesAria: "Abrir categorías",
    closeCategoriesAria: "Cerrar categorías",
    languageSelectorAria: "Idioma",
    categoriesClosed: "Categorías ▾",
    categoriesOpen: "Categorías ▴",
    searchPlaceholder: "Buscar: encebollado, ceviche, bolón...",
    searchAria: "Buscar productos en español o inglés",
    clearSearch: "Limpiar búsqueda",
    heroAria: "Promoción principal",
    heroEyebrow: "Menú digital · Floresta Brava",
    heroTitle: "Elige, combina y pide",
    heroAccent: "por WhatsApp",
    heroDescription: "Explora desayunos, almuerzos, platos a la carta y bebidas. Suma tus favoritos y envía el pedido en un solo mensaje.",
    pricedMenu: "Carta con precios",
    directOrder: "Pedido directo",
    orderWhatsApp: "Pedir por WhatsApp",
    viewFeatured: "Ver destacados",
    categoriesAria: "Categorías",
    catLunch: "Almuerzos",
    catBreakfast: "Desayunos",
    catSeafood: "Mariscos",
    catMeat: "Carnes",
    catChicken: "Pollos",
    catDrinks: "Bebidas",
    catSkewers: "Pinchos",
    catJuices: "Jugos",
    catSoftDrinks: "Gaseosa",
    catBeer: "Cerveza",
    lunchFrom: "desde $2,75",
    featuredAria: "Destacados",
    featuredTitle: "Destacados",
    featuredSubtitle: "Lo más pedido",
    breakfastTag: "Desde las 08h00",
    dailyMenu: "Menú del día",
    mainCourses: "Platos fuertes",
    coastalFlavors: "Sabores de la costa",
    aLaCarte: "A la carta",
    grilled: "A la parrilla",
    coldDrinks: "Frías",
    breakfastDescription: "Desayunos típicos para arrancar el día con energía.",
    lunchDescription: "Opciones completas y económicas para todos los días.",
    meatDescription: "Cortes a la plancha o apanados, con acompañantes completos.",
    seafoodDescription: "Ceviches, arroces y platos calientes con mariscos frescos.",
    chickenDescription: "Platos de pollo bien sazonados y servidos con acompañantes.",
    skewerDescription: "Ideales para acompañar tu merienda.",
    drinksDescription: "Gaseosas y cervezas para acompañar tu comida.",
    quickActionsAria: "Accesos rápidos",
    sendWhatsAppAria: "Enviar pedido por WhatsApp",
    viewOrderAria: "Ver pedido",
    callAria: "Llamar a Floresta Brava",
    call: "Llamar",
    order: "Pedido",
    send: "Enviar",
    yourOrder: "Tu pedido",
    close: "Cerrar",
    notesOptional: "Observaciones (opcional)",
    notesPlaceholder: "Ej: sin cebolla, poco ají, para llevar, enviar salsas aparte...",
    clear: "Limpiar",
    sendWhatsApp: "Enviar por WhatsApp",
    home: "Inicio",
    digitalMenu: "Menú digital",
    backToTop: "Subir",
    quantity: "Cantidad",
    subtractProduct: "Restar {name}",
    addProduct: "Sumar {name}",
    productAdded: "{name} agregado al pedido",
    ingredients: "Ingredientes",
    topChoice: "Más pedido",
    noPhoto: "Sin foto",
    pricePending: "Consultar precio",
    noteFood: "Listo en minutos · Porciones que llenan",
    noteJuice: "Natural y refrescante",
    notePackaged: "Bien fría · Ideal para acompañar",
    orderProduct: "Pedir {name}",
    cartEmpty: "Selecciona productos con + para armar tu pedido.",
    total: "Total",
    totalApprox: "Total aprox",
    each: "c/u",
    closeIngredients: "Cerrar ingredientes",
    ingredientsTitle: "Ingredientes · {name}",
    ingredientsButton: "Consultar ingredientes por WhatsApp",
    ingredientsConfirmed: "Ingredientes principales:",
    ingredientsReference: "Ingredientes principales de referencia:",
    ingredientsTypical: "Ingredientes habituales en preparaciones ecuatorianas similares:",
    ingredientsReferenceWarning: "La preparación de Floresta Brava puede variar. Esta lista no es una declaración completa de alérgenos ni contempla contaminación cruzada. Si tienes alergias o restricciones alimentarias, confírmanos los ingredientes antes de ordenar.",
    ingredientsTypicalWarning: "Esta lista es una referencia culinaria, no la receta exacta de Floresta Brava ni una declaración completa de alérgenos; tampoco contempla contaminación cruzada. Si tienes alergias o restricciones alimentarias, confírmanos los ingredientes antes de ordenar.",
    ingredientsPending: "Aún no contamos con una referencia de ingredientes para esta preparación. Consúltanos antes de ordenar.",
    waEmpty: "Hola, vengo del menú QR de Floresta Brava. Quiero hacer un pedido. ¿Me ayudas por favor?",
    waCartIntro: "Hola, vengo del menú QR de Floresta Brava. Quiero pedir:",
    waItem: "Hola, vengo del menú QR de Floresta Brava. Quiero pedir: {name} ({price}).",
    waNotes: "Observaciones",
    waThanks: "Gracias.",
    waIngredients: "Hola, quisiera confirmar los ingredientes de {name}. Tengo una consulta antes de ordenar."
  },
  en: {
    documentTitle: "Digital Menu | Floresta Brava",
    metaDescription: "Floresta Brava digital menu. Lunch, breakfast, seafood, meats, chicken and drinks. Order on WhatsApp.",
    ogTitle: "Digital Menu | Floresta Brava",
    ogDescription: "Floresta Brava digital menu. Order on WhatsApp.",
    skipLink: "Skip to content",
    homeAria: "Go to homepage",
    openCategoriesAria: "Open categories",
    closeCategoriesAria: "Close categories",
    languageSelectorAria: "Language",
    categoriesClosed: "Categories ▾",
    categoriesOpen: "Categories ▴",
    searchPlaceholder: "Search: encebollado, shrimp, chicken...",
    searchAria: "Search products in English or Spanish",
    clearSearch: "Clear search",
    heroAria: "Main promotion",
    heroEyebrow: "Digital menu · Floresta Brava",
    heroTitle: "Choose, combine and order",
    heroAccent: "on WhatsApp",
    heroDescription: "Explore breakfast, lunch, à la carte dishes and drinks. Add your favorites and send the full order in one message.",
    pricedMenu: "Menu with prices",
    directOrder: "Direct ordering",
    orderWhatsApp: "Order on WhatsApp",
    viewFeatured: "View featured items",
    categoriesAria: "Categories",
    catLunch: "Lunch",
    catBreakfast: "Breakfast",
    catSeafood: "Seafood",
    catMeat: "Meats",
    catChicken: "Chicken",
    catDrinks: "Drinks",
    catSkewers: "Skewers",
    catJuices: "Juices",
    catSoftDrinks: "Soft Drinks",
    catBeer: "Beer",
    lunchFrom: "from $2.75",
    featuredAria: "Featured items",
    featuredTitle: "Featured",
    featuredSubtitle: "Most ordered",
    breakfastTag: "From 8:00 a.m.",
    dailyMenu: "Menu of the day",
    mainCourses: "Main courses",
    coastalFlavors: "Coastal flavors",
    aLaCarte: "À la carte",
    grilled: "From the grill",
    coldDrinks: "Cold",
    breakfastDescription: "Traditional breakfast dishes to start your day with energy.",
    lunchDescription: "Complete, affordable options for every day.",
    meatDescription: "Grilled or breaded cuts served with complete side dishes.",
    seafoodDescription: "Ceviches, rice dishes and hot plates prepared with fresh seafood.",
    chickenDescription: "Well-seasoned chicken dishes served with side dishes.",
    skewerDescription: "A great addition to your evening meal.",
    drinksDescription: "Soft drinks and beer to enjoy with your meal.",
    quickActionsAria: "Quick actions",
    sendWhatsAppAria: "Send order on WhatsApp",
    viewOrderAria: "View order",
    callAria: "Call Floresta Brava",
    call: "Call",
    order: "Order",
    send: "Send",
    yourOrder: "Your order",
    close: "Close",
    notesOptional: "Notes (optional)",
    notesPlaceholder: "Example: no onions, mild spice, takeout, sauces on the side...",
    clear: "Clear",
    sendWhatsApp: "Send on WhatsApp",
    home: "Home",
    digitalMenu: "Digital menu",
    backToTop: "Back to top",
    quantity: "Quantity",
    subtractProduct: "Remove one {name}",
    addProduct: "Add one {name}",
    productAdded: "{name} added to your order",
    ingredients: "Ingredients",
    topChoice: "Most ordered",
    noPhoto: "No photo",
    pricePending: "Ask for price",
    noteFood: "Ready in minutes · Satisfying portions",
    noteJuice: "Fresh and refreshing",
    notePackaged: "Served cold · Perfect with your meal",
    orderProduct: "Order {name}",
    cartEmpty: "Select products with + to build your order.",
    total: "Total",
    totalApprox: "Approx. total",
    each: "each",
    closeIngredients: "Close ingredients",
    ingredientsTitle: "Ingredients · {name}",
    ingredientsButton: "Ask about ingredients on WhatsApp",
    ingredientsConfirmed: "Main ingredients:",
    ingredientsReference: "Reference main ingredients:",
    ingredientsTypical: "Ingredients commonly used in similar Ecuadorian preparations:",
    ingredientsReferenceWarning: "Floresta Brava's preparation may vary. This is not a complete allergen statement and does not cover cross-contact. If you have food allergies or dietary restrictions, please confirm the ingredients with us before ordering.",
    ingredientsTypicalWarning: "This is a culinary reference, not Floresta Brava's exact recipe or a complete allergen statement; it also does not cover cross-contact. If you have food allergies or dietary restrictions, please confirm the ingredients with us before ordering.",
    ingredientsPending: "We do not yet have an ingredient reference for this preparation. Please ask us before ordering.",
    waEmpty: "Hello, I'm ordering from the Floresta Brava QR menu. I would like help placing an order.",
    waCartIntro: "Hello, I'm ordering from the Floresta Brava QR menu. I would like to order:",
    waItem: "Hello, I'm ordering from the Floresta Brava QR menu. I would like to order: {name} ({price}).",
    waNotes: "Notes",
    waThanks: "Thank you.",
    waIngredients: "Hello, I would like to confirm the ingredients of {name}. I have a question before ordering."
  }
};

const L = (es, en) => Object.freeze({ es: es, en: en });
const I = (es, en) => L(
  String(es || "").split("|").map((value) => value.trim()).filter(Boolean),
  String(en || "").split("|").map((value) => value.trim()).filter(Boolean)
);

function defaultDescription(status) {
  if (status === "confirmed") {
    return L(
      "Preparación con ingredientes principales respaldados por la información actual del sitio.",
      "A dish whose main ingredients are supported by the site's current information."
    );
  }
  if (status === "referential") {
    return L(
      "Preparación de la casa con ingredientes principales de referencia.",
      "House preparation with reference main ingredients."
    );
  }
  return L(
    "Consulta los ingredientes habituales y confirma con nuestro equipo cualquier alergia o variación de la casa.",
    "Review the typical ingredients and confirm any allergies or house variations with our team."
  );
}

function P(id, es, en, price, file, status, ingredients, description) {
  return Object.freeze({
    id: id,
    name: L(es, en),
    description: description || defaultDescription(status),
    ingredients: ingredients || I("", ""),
    ingredientStatus: status,
    price: price,
    file: file
  });
}

const FEATURED = Object.freeze([
  { id: "encebollado", tag: L("Clásico", "Classic") },
  { id: "ceviche-mixto", tag: L("Top", "Top choice") },
  { id: "chaulafan", tag: L("Rápido", "Quick") },
  { id: "bisteck-costeno", tag: L("Fuerte", "Hearty") },
  { id: "carne-apanada", tag: L("Crocante", "Crispy") },
  { id: "tigrillo", tag: L("Desayuno", "Breakfast") }
]);

const MENU = Object.freeze([
  {
    id: "almuerzos",
    title: L("Almuerzos", "Lunch"),
    desc: L("Opciones completas y económicas para todos los días.", "Complete, affordable options for every day."),
    compact: false,
    showIngredients: true,
    noteKey: "noteFood",
    items: Object.freeze([
      P("almuerzo-merienda", "Almuerzos / Meriendas", "Lunch / Evening Meal", 2.75, "almuerzo.webp", "needs_kitchen_confirmation",
        I("sopa del día de preparación variable|arroz o acompañamiento|proteína o plato fuerte del día|ensalada o guarnición|jugo o bebida del día", "variable soup of the day|rice or side dish|daily protein or main course|salad or garnish|juice or drink of the day")),
      P("almuerzo-encebollado", "Almuerzos con encebollado", "Lunch with Encebollado", 3.50, "almuerzo-encebollado.webp", "referential",
        I("pescado/albacora|yuca|cebolla colorada|tomate|cilantro|especias|componentes variables del plato fuerte", "fish/tuna|cassava|red onion|tomato|cilantro|spices|variable daily main-course components")),
      P("merienda-pincho", "Meriendas con pincho", "Evening Meal with Skewer", 3.50, "merienda-pincho.webp", "needs_kitchen_confirmation",
        I("pincho de res o pollo marinado|cebolla y pimiento del pincho|arroz o guarnición|menestra o ensalada según el día|bebida del día", "marinated beef or chicken skewer|onion and bell pepper on the skewer|rice or side dish|stewed legumes or salad depending on the day|drink of the day")),
      P("segundo-dia", "Segundo del día", "Daily Main Course", 2.25, "segundo.webp", "needs_kitchen_confirmation",
        I("arroz|proteína del día: res, pollo, cerdo o pescado|menestra, pasta, papa o plátano según la preparación|ensalada o guarnición|refrito y condimentos", "rice|daily protein: beef, chicken, pork or fish|stewed legumes, pasta, potato or plantain depending on the preparation|salad or garnish|sofrito and seasonings")),
      P("sopa-dia", "Sopa del día", "Soup of the Day", 1.50, "sopasola.webp", "needs_kitchen_confirmation",
        I("caldo o base de sopa|papa, yuca, fideo o legumbre según la preparación|vegetales|refrito de cebolla, ajo y achiote|cilantro y condimentos", "broth or soup base|potato, cassava, noodles or legumes depending on the preparation|vegetables|onion, garlic and achiote sofrito|cilantro and seasonings"))
    ])
  },
  {
    id: "carnes",
    title: L("Carnes", "Meats"),
    desc: L("Cortes preparados a la plancha o apanados, con guarniciones completas.", "Grilled or breaded cuts served with complete side dishes."),
    compact: false,
    showIngredients: true,
    noteKey: "noteFood",
    items: Object.freeze([
      P("bisteck-costeno", "Bisteck costeño", "Coastal-Style Beef Steak", 5.25, "bisteckcosteno.webp", "referential",
        I("carne de res|cebolla|tomate|pimiento|ajo|condimentos|acompañamientos", "beef|onion|tomato|bell pepper|garlic|seasonings|side dishes")),
      P("carne-apanada", "Carne apanada", "Breaded Beef", 5.25, "carneapanada.webp", "referential",
        I("carne de res|apanado|huevo|condimentos|acompañamientos", "beef|breading|egg|seasonings|side dishes")),
      P("chuleta", "Chuleta", "Pork Chop", 6.00, "chuleta.webp", "referential",
        I("chuleta de cerdo|ajo|condimentos|acompañamientos", "pork chop|garlic|seasonings|side dishes")),
      P("churrasco", "Churrasco", "Ecuadorian Churrasco", 5.25, "churrasco.webp", "confirmed",
        I("carne de res|arroz|papas fritas|ensalada|huevo frito", "beef steak|rice|French fries|salad|fried egg")),
      P("lomo-pimienta", "Lomo a la pimienta", "Pepper Steak", 5.25, "lomoalapimienta.webp", "referential",
        I("lomo de res|pimienta|salsa de la casa|condimentos|acompañamientos", "beef loin|black pepper|house sauce|seasonings|side dishes")),
      P("lomo-plancha", "Lomo a la plancha", "Grilled Beef Loin", 5.25, "lomolaplancha.webp", "referential",
        I("lomo de res|ajo|condimentos|acompañamientos", "grilled beef loin|garlic|seasonings|side dishes")),
      P("menestras", "Menestras", "Menestras — Ecuadorian Stewed Legumes", 5.25, "menestradecarne.webp", "needs_kitchen_confirmation",
        I("fréjol o lenteja|cebolla|pimiento|tomate|ajo|achiote y comino|arroz|proteína y guarnición", "beans or lentils|onion|bell pepper|tomato|garlic|achiote and cumin|rice|protein and garnish"))
    ])
  },
  {
    id: "desayunos",
    title: L("Desayunos", "Breakfast"),
    desc: L("Desayunos típicos ecuatorianos para arrancar el día con energía.", "Traditional Ecuadorian breakfast dishes to start your day with energy."),
    compact: false,
    showIngredients: true,
    noteKey: "noteFood",
    items: Object.freeze([
      P("combo-bolon", "Combo Bolón", "Bolón Combo", 2.75, "bolon-estofado.webp", "needs_kitchen_confirmation",
        I("plátano verde|queso, chicharrón o combinación|sal|aceite o manteca|estofado de carne|acompañamiento o bebida según el combo", "green plantain|cheese, pork cracklings or a combination|salt|oil or lard|beef stew|side dish or drink depending on the combo")),
      P("corviches", "Corviches", "Corviches — Green Plantain & Fish Fritters", 1.00, "corviches.webp", "referential",
        I("plátano verde|pescado|maní|cebolla|pimiento|ajo|achiote|condimentos", "green plantain|fish|peanuts|onion|bell pepper|garlic|achiote|seasonings")),
      P("desayuno-completo", "Desayuno completo", "Full Breakfast", 3.75, "desayuno_completo.webp", "needs_kitchen_confirmation",
        I("huevos|pan o preparación de verde|queso|jamón o proteína según la presentación|jugo de fruta|café, leche o bebida caliente", "eggs|bread or green-plantain preparation|cheese|ham or another protein depending on the presentation|fruit juice|coffee, milk or a hot drink")),
      P("desayuno-continental", "Desayuno continental", "Continental Breakfast", 2.75, "desayunocontinental.webp", "needs_kitchen_confirmation",
        I("pan o tostadas|mantequilla o mermelada|jugo de fruta|café o leche|fruta según la presentación", "bread or toast|butter or jam|fruit juice|coffee or milk|fruit depending on the presentation")),
      P("empanadas", "Empanadas", "Empanadas", 1.00, "empanadas.webp", "confirmed",
        I("masa de empanada|relleno según elección: queso, carne o pollo", "empanada dough|choice of cheese, beef or chicken filling")),
      P("muchines", "Muchines", "Muchines — Ecuadorian Cassava Fritters", 1.00, "muchin.webp", "needs_kitchen_confirmation",
        I("yuca|queso o carne para el relleno|cebolla|ajo|achiote|comino|aceite para freír", "cassava|cheese or meat filling|onion|garlic|achiote|cumin|frying oil")),
      P("tamales", "Tamales", "Ecuadorian Tamales", 1.00, "tamal.webp", "needs_kitchen_confirmation",
        I("masa de maíz|manteca|pollo o cerdo|cebolla|ajo|achiote|zanahoria|arveja|huevo|pasas|hoja de achira para envolver", "corn dough|lard|chicken or pork|onion|garlic|achiote|carrot|peas|egg|raisins|achira leaf for wrapping")),
      P("bolon", "Bolón", "Bolón — Green Plantain Ball", 1.00, "bolonsolo.webp", "needs_kitchen_confirmation",
        I("plátano verde|queso, chicharrón o combinación|sal|aceite o manteca", "green plantain|cheese, pork cracklings or a combination|salt|oil or lard")),
      P("tigrillo", "Tigrillo", "Tigrillo — Mashed Green Plantain with Egg & Cheese", 4.00, "tigrillo.webp", "referential",
        I("plátano verde|huevo|queso|condimentos", "green plantain|egg|cheese|seasonings"))
    ])
  },
  {
    id: "mariscos",
    title: L("Mariscos", "Seafood"),
    desc: L("Ceviches, arroces y platos calientes preparados con mariscos frescos.", "Ceviches, rice dishes and hot plates prepared with fresh seafood."),
    compact: false,
    showIngredients: true,
    noteKey: "noteFood",
    items: Object.freeze([
      P("arroz-camaron", "Arroz con camarón", "Ecuadorian Shrimp Rice", 8.50, "arrozconcamaron.webp", "referential",
        I("arroz|camarón|cebolla|pimiento|ajo|tomate|achiote|cilantro|condimentos", "rice|shrimp|onion|bell pepper|garlic|tomato|achiote|cilantro|seasonings")),
      P("arroz-concha", "Arroz con concha", "Black Clam Rice", 10.00, "arrozconconcha.webp", "referential",
        I("arroz|concha|cebolla|pimiento|ajo|achiote|cilantro|condimentos", "rice|black clams|onion|bell pepper|garlic|achiote|cilantro|seasonings")),
      P("arroz-mixto", "Arroz mixto", "Mixed Seafood Rice", 10.00, "arrozmixto.webp", "referential",
        I("arroz|mezcla de mariscos|cebolla|pimiento|ajo|achiote|cilantro|condimentos", "rice|mixed seafood|onion|bell pepper|garlic|achiote|cilantro|seasonings")),
      P("bandera", "Bandera", "Bandera — Ecuadorian Combination Plate", 10.00, "bandera.webp", "needs_kitchen_confirmation",
        I("arroz blanco|guatita|encebollado|uno o más ceviches de camarón, pescado o concha|cazuela u otra preparación costeña|maduro, chifle o aguacate como acompañamiento", "white rice|guatita|encebollado|one or more shrimp, fish or black-clam ceviches|cazuela or another coastal preparation|fried ripe plantain, plantain chips or avocado as a side")),
      P("bochinche", "Bochinche", "Bochinche — House Seafood Specialty", 10.00, "bochinche.webp", "needs_kitchen_confirmation",
        I("pescado y/o mariscos, como camarón o calamar|arroz u otra base de la preparación|cebolla, pimiento y ajo|achiote y cilantro|salsa y acompañamientos variables", "fish and/or seafood, such as shrimp or squid|rice or another preparation base|onion, bell pepper and garlic|achiote and cilantro|variable sauce and side dishes")),
      P("camarones-ajillo", "Camarones al ajillo", "Garlic Shrimp", 8.50, "camaronesalajillo.webp", "referential",
        I("camarones|ajo|aceite/materia grasa de cocción|hierbas|condimentos|acompañamientos", "shrimp|garlic|cooking oil/fat|herbs|seasonings|side dishes")),
      P("camarones-apanados", "Camarones apanados", "Breaded Shrimp", 8.50, "camaronesapanados.webp", "referential",
        I("camarones|apanado|huevo|condimentos|acompañamientos", "shrimp|breading|egg|seasonings|side dishes")),
      P("cazuelas", "Cazuelas", "Cazuela — Green Plantain & Seafood Casserole", 8.50, "cazueladecamaron.webp", "referential",
        I("plátano verde|maní|mariscos o pescado|cebolla|pimiento|ajo|tomate|achiote|especias", "green plantain|peanuts|seafood or fish|onion|bell pepper|garlic|tomato|achiote|spices")),
      P("ceviche-camaron", "Ceviche de camarón", "Shrimp Ceviche", 8.50, "cevichedecamaron.webp", "referential",
        I("camarón|tomate|cebolla colorada|limón|naranja|cilantro|condimentos/salsa de la casa", "shrimp|tomato|red onion|lime|orange|cilantro|house seasonings/sauce")),
      P("ceviche-concha", "Ceviche de concha", "Black Clam Ceviche", 10.00, "cevichedeconcha.webp", "referential",
        I("concha|cebolla colorada|limón|cilantro|condimentos", "black clams|red onion|lime|cilantro|seasonings")),
      P("ceviche-pescado", "Ceviche de pescado", "Fish Ceviche", 8.00, "cevichedepescado.webp", "referential",
        I("pescado|limón|cebolla colorada|cilantro|condimentos", "fish|lime|red onion|cilantro|seasonings")),
      P("ceviche-mixto", "Ceviche mixto", "Mixed Seafood Ceviche", 10.00, "cevichemixto.webp", "referential",
        I("mezcla de mariscos|limón|cebolla colorada|tomate|cilantro|condimentos", "mixed seafood|lime|red onion|tomato|cilantro|seasonings")),
      P("cevichon", "Cevichón", "Cevichón — House Ceviche Specialty", 4.50, "cevichon.webp", "needs_kitchen_confirmation",
        I("pescado y/o mariscos, como camarón, pulpo o calamar|limón|cebolla colorada|tomate o salsa según la variante|cilantro|condimentos", "fish and/or seafood, such as shrimp, octopus or squid|lime|red onion|tomato or sauce depending on the version|cilantro|seasonings")),
      P("chaulafan", "Chaulafán", "Ecuadorian-Style Fried Rice", 3.75, "chaulafan.webp", "needs_kitchen_confirmation",
        I("arroz|pollo, carne de res o camarón|huevo|zanahoria|arveja|pimiento|cebolla|ajo|salsa de soya|aceite y condimentos", "rice|chicken, beef or shrimp|egg|carrot|peas|bell pepper|onion|garlic|soy sauce|oil and seasonings")),
      P("chupe-pescado", "Chupe de pescado", "Fish Chupe — Ecuadorian Fish Soup", 3.75, "chupedepescado.webp", "needs_kitchen_confirmation",
        I("pescado|papa, choclo y vegetales según la variante|cebolla, pimiento, ajo y tomate|caldo|leche, queso, mantequilla o harina en variantes cremosas|comino, orégano y cilantro", "fish|potato, corn and vegetables depending on the version|onion, bell pepper, garlic and tomato|broth|milk, cheese, butter or flour in creamy versions|cumin, oregano and cilantro")),
      P("corvina", "Corvina", "Corvina Fish", 8.50, "corvina.webp", "needs_kitchen_confirmation",
        I("corvina|ajo|limón|sal y condimentos|harina o apanado si se sirve frita|aceite|arroz, ensalada, plátano o papas como acompañamiento", "corvina fish|garlic|lime|salt and seasonings|flour or breading if served fried|oil|rice, salad, plantain or potatoes as side dishes")),
      P("encebollado", "Encebollado", "Encebollado — Ecuadorian Tuna & Cassava Soup", 3.00, "encebollado.webp", "referential",
        I("pescado/albacora|yuca|cebolla colorada curtida|tomate|cilantro|especias", "fish/tuna|cassava|pickled red onion|tomato|cilantro|spices")),
      P("encebollado-mixto", "Encebollado mixto", "Mixed Seafood Encebollado", 8.50, "encebolladomixto.webp", "needs_kitchen_confirmation",
        I("pescado o albacora|yuca|camarón, calamar, concha u otros mariscos|cebolla colorada|tomate|cilantro|comino y especias|limón", "fish or tuna|cassava|shrimp, squid, black clams or other seafood|red onion|tomato|cilantro|cumin and spices|lime")),
      P("guatita", "Guatita", "Guatita — Ecuadorian Beef Tripe & Peanut Stew", 3.00, "guatita.webp", "referential",
        I("mondongo de res|papa|maní|cebolla|ajo|achiote|condimentos", "beef tripe|potato|peanuts|onion|garlic|achiote|seasonings")),
      P("langostinos-brava", "Langostinos a la brava", "Langostinos a la Brava — House-Style Prawns", 10.00, "langostinosalabrava.webp", "needs_kitchen_confirmation",
        I("langostinos|ajo y cebolla|salsa de la casa de composición variable|aceite o materia grasa de cocción|cilantro y condimentos|arroz, plátano o ensalada como acompañamiento", "prawns|garlic and onion|house sauce with variable ingredients|cooking oil or fat|cilantro and seasonings|rice, plantain or salad as side dishes")),
      P("sopa-camaron", "Sopa de camarón", "Shrimp Soup", 8.50, "sopadecamaron.webp", "needs_kitchen_confirmation",
        I("camarón y caldo elaborado con sus cáscaras|cebolla, pimiento, ajo y achiote|cilantro y condimentos|plátano verde rallado en algunas variantes|papa, leche o harina en variantes cremosas", "shrimp and stock made from its shells|onion, bell pepper, garlic and achiote|cilantro and seasonings|grated green plantain in some versions|potato, milk or flour in creamy versions"))
    ])
  },
  {
    id: "pollos",
    title: L("Pollos", "Chicken"),
    desc: L("Platos de pollo jugosos y bien sazonados, con acompañantes.", "Well-seasoned chicken dishes served with side dishes."),
    compact: false,
    showIngredients: true,
    noteKey: "noteFood",
    items: Object.freeze([
      P("arroz-pollo", "Arroz con pollo", "Ecuadorian Chicken Rice", 3.75, "arrozconpollo.webp", "referential",
        I("arroz|pollo|cebolla|pimiento|vegetales|achiote|condimentos", "rice|chicken|onion|bell pepper|vegetables|achiote|seasonings")),
      P("pechuga-plancha", "Pechuga a la plancha", "Grilled Chicken Breast", 5.25, "pechugaalaplancha.webp", "referential",
        I("pechuga de pollo|ajo|condimentos|acompañamientos", "grilled chicken breast|garlic|seasonings|side dishes")),
      P("pechuga-apanada", "Pechuga apanada", "Breaded Chicken Breast", 5.25, "pechugaapanada.webp", "referential",
        I("pechuga de pollo|apanado|huevo|condimentos|acompañamientos", "chicken breast|breading|egg|seasonings|side dishes")),
      P("seco-pollo", "Seco de pollo", "Seco de Pollo — Ecuadorian Stewed Chicken", 4.00, "secodepollo.webp", "referential",
        I("pollo|cebolla|tomate|pimiento|cilantro|achiote|especias", "chicken|onion|tomato|bell pepper|cilantro|achiote|spices"))
    ])
  },
  {
    id: "jugos",
    title: L("Jugos", "Juices"),
    desc: L("Opciones individuales y jarras.", "Single servings and pitchers."),
    compact: true,
    showIngredients: true,
    noteKey: "noteJuice",
    items: Object.freeze([
      P("vaso-jugo", "Vaso de Jugo", "Glass of Fresh Juice", 2.00, "", "referential",
        I("fruta disponible del día|agua|azúcar según preparación", "available fruit of the day|water|sugar depending on preparation")),
      P("limonada", "Limonada", "Lemonade", 1.50, "", "referential",
        I("limón|agua|azúcar según preparación", "lime|water|sugar depending on preparation")),
      P("jarra-jugo", "Jarra de Jugo", "Pitcher of Fresh Juice", 6.00, "", "referential",
        I("fruta disponible del día|agua|azúcar según preparación", "available fruit of the day|water|sugar depending on preparation"))
    ])
  },
  {
    id: "gaseosas",
    title: L("Gaseosa", "Soft Drinks"),
    desc: L("Opciones individuales y familiares.", "Personal and family-size options."),
    compact: true,
    showIngredients: false,
    noteKey: "notePackaged",
    items: Object.freeze([
      P("gaseosa-mediana", "Gaseosa Mediana", "Medium Soft Drink", 1.00, "", "needs_kitchen_confirmation", I("", "")),
      P("gaseosa-personal", "Gaseosa Personal", "Personal Soft Drink", 0.75, "", "needs_kitchen_confirmation", I("", "")),
      P("gaseosa-135-l", "Gaseosa 1.35 L", "1.35 L Soft Drink", 2.25, "", "needs_kitchen_confirmation", I("", "")),
      P("agua-sin-gas", "Agua sin gas", "Still Water", 1.00, "", "needs_kitchen_confirmation", I("", "")),
      P("agua-con-gas", "Agua con gas", "Sparkling Water", 1.00, "", "needs_kitchen_confirmation", I("", ""))
    ])
  },
  {
    id: "cerveza",
    title: L("Cerveza", "Beer"),
    desc: L("Cervezas nacionales.", "National beers."),
    compact: true,
    showIngredients: false,
    noteKey: "notePackaged",
    items: Object.freeze([
      P("cerveza-pilsener-600ml", "Cerveza Pilsener 600 ml", "Pilsener Beer 600 ml", 2.25, "", "needs_kitchen_confirmation", I("", "")),
      P("cerveza-club-550ml", "Cerveza Club 550 ml", "Club Beer 550 ml", 2.50, "", "needs_kitchen_confirmation", I("", "")),
      P("cerveza-artesanal-300", "Cerveza Artesanal", "Craft Beer", 3.00, "", "needs_kitchen_confirmation", I("", "")),
      P("cerveza-artesanal-325", "Cerveza Artesanal", "Craft Beer", 3.25, "", "needs_kitchen_confirmation", I("", "")),
      P("cerveza-artesanal-350", "Cerveza Artesanal", "Craft Beer", 3.50, "", "needs_kitchen_confirmation", I("", ""))
    ])
  },
  {
    id: "pinchos",
    title: L("Pinchos", "Skewers"),
    desc: L("Ideales para acompañar tu merienda.", "A great addition to your evening meal."),
    compact: false,
    showIngredients: true,
    noteKey: "noteFood",
    items: Object.freeze([
      P("pincho-carne", "Pincho de carne", "Beef Skewer", 1.25, "pincho-carne.webp", "referential",
        I("carne de res marinada|vegetales del pincho|condimentos", "marinated beef|skewer vegetables|seasonings")),
      P("pincho-pollo", "Pincho de pollo", "Chicken Skewer", 1.25, "pincho-pollo.webp", "referential",
        I("pollo marinado|vegetales del pincho|condimentos", "marinated chicken|skewer vegetables|seasonings")),
      P("pincho-completo", "Pincho completo", "Complete Skewer Meal", 2.50, "pincho-completo.webp", "needs_kitchen_confirmation",
        I("pincho marinado de res o pollo|cebolla y pimiento del pincho|arroz|menestra de lenteja o fréjol|ensalada o curtido|plátano frito u otra guarnición|salsa de la casa", "marinated beef or chicken skewer|onion and bell pepper on the skewer|rice|stewed lentils or beans|salad or slaw|fried plantain or another garnish|house sauce"))
    ])
  }
]);

const CATEGORY_BY_ID = new Map();
const PRODUCT_BY_ID = new Map();
const PRODUCT_CATEGORY_BY_ID = new Map();

for (const category of MENU) {
  if (!category.id || CATEGORY_BY_ID.has(category.id)) {
    throw new Error("ID de categoría vacío o duplicado: " + category.id);
  }
  CATEGORY_BY_ID.set(category.id, category);
  for (const item of category.items || []) {
    const productId = String(item.id || "").trim();
    if (!productId) throw new Error("Producto sin ID en la categoría: " + category.id);
    if (PRODUCT_BY_ID.has(productId)) throw new Error("ID de producto duplicado: " + productId);
    if (!item.name.es || !item.name.en || !item.description.es || !item.description.en) {
      throw new Error("Producto sin contenido bilingüe: " + productId);
    }
    if (!item.ingredients || !Array.isArray(item.ingredients.es) || !Array.isArray(item.ingredients.en)) {
      throw new Error("Producto sin estructura bilingüe de ingredientes: " + productId);
    }
    if (!["confirmed", "referential", "needs_kitchen_confirmation"].includes(item.ingredientStatus)) {
      throw new Error("Estado de ingredientes inválido: " + productId);
    }
    PRODUCT_BY_ID.set(productId, item);
    PRODUCT_CATEGORY_BY_ID.set(productId, category);
  }
}

for (const featured of FEATURED) {
  if (!PRODUCT_BY_ID.has(featured.id)) {
    throw new Error("Destacado sin producto activo: " + featured.id);
  }
}

function normalizeLanguage(value) {
  const base = String(value || "").trim().toLowerCase().split("-")[0];
  return SUPPORTED_LANGUAGES.has(base) ? base : null;
}

function readStoredLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    /* La experiencia sigue funcionando aunque el navegador bloquee storage. */
  }
}

function resolveLanguage(options) {
  const source = options || {};
  const params = new URLSearchParams(source.search || "");
  const queryLanguage = normalizeLanguage(params.get("lang"));
  if (queryLanguage) return queryLanguage;

  const storedLanguage = normalizeLanguage(source.storedLang);
  if (storedLanguage) return storedLanguage;

  const browserLanguages = Array.isArray(source.browserLanguages) ? source.browserLanguages : [];
  for (const browserLanguage of browserLanguages) {
    const normalized = normalizeLanguage(browserLanguage);
    if (normalized === "en") return "en";
    if (normalized === "es") return "es";
  }
  return "es";
}

const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
  ? navigator.languages
  : [navigator.language];
let currentLang = resolveLanguage({
  search: window.location.search,
  storedLang: readStoredLanguage(),
  browserLanguages: browserLanguages
});

function localized(value) {
  if (!value || typeof value !== "object") return String(value || "");
  return String(value[currentLang] || value.es || "");
}

function t(key, values) {
  let text = I18N[currentLang][key];
  if (text == null) text = I18N.es[key];
  if (text == null) return key;
  for (const entry of Object.entries(values || {})) {
    text = text.split("{" + entry[0] + "}").join(String(entry[1]));
  }
  return text;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function formatPrice(price) {
  if (price === null || price === undefined || price === "") return "";
  const decimal = Number(price).toFixed(2);
  return "$" + (currentLang === "es" ? decimal.replace(".", ",") : decimal);
}

function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function findItemById(productId) {
  return PRODUCT_BY_ID.get(String(productId || "").trim()) || null;
}

function waForItem(item) {
  return waLink(t("waItem", {
    name: localized(item.name),
    price: formatPrice(item.price)
  }));
}

function buildSearchIndex(item, category) {
  const values = [
    item.name.es,
    item.name.en,
    item.description.es,
    item.description.en,
    category.title.es,
    category.title.en
  ];
  values.push.apply(values, item.ingredients.es || []);
  values.push.apply(values, item.ingredients.en || []);
  return normalizeSearch(values.join(" "));
}

const FEATURED_SET = new Set(FEATURED.map((entry) => entry.id));
const CART = new Map();

function setQty(productId, quantity) {
  const key = String(productId || "").trim();
  if (!PRODUCT_BY_ID.has(key)) return;
  const normalizedQuantity = Math.max(0, Math.floor(Number(quantity || 0)));
  if (normalizedQuantity === 0) {
    CART.delete(key);
  } else {
    CART.set(key, { id: key, qty: normalizedQuantity });
  }
  syncCartUI();
}

function incQty(productId, delta) {
  const key = String(productId || "").trim();
  if (!PRODUCT_BY_ID.has(key)) return;
  const current = CART.get(key);
  setQty(key, Math.max(0, (current ? current.qty : 0) + Number(delta || 0)));
}

function cartCount() {
  let count = 0;
  for (const entry of CART.values()) count += entry.qty || 0;
  return count;
}

function cartTotal() {
  let total = 0;
  for (const entry of CART.values()) {
    const item = findItemById(entry.id);
    if (item && typeof item.price === "number") total += item.price * (entry.qty || 0);
  }
  return total;
}

function buildCartMessage() {
  const notesElement = document.getElementById("cartNotes");
  const notes = notesElement && notesElement.value ? notesElement.value.trim() : "";

  if (CART.size === 0) {
    return notes ? t("waEmpty") + "\n\n" + t("waNotes") + ": " + notes : t("waEmpty");
  }

  const lines = [t("waCartIntro")];
  for (const entry of CART.values()) {
    const item = findItemById(entry.id);
    if (!item) continue;
    const price = formatPrice(item.price);
    lines.push("- " + localized(item.name) + " x" + entry.qty + (price ? " (" + price + " " + t("each") + ")" : ""));
  }
  lines.push("");
  lines.push(t("totalApprox") + ": " + formatPrice(cartTotal()));
  if (notes) {
    lines.push("");
    lines.push(t("waNotes") + ": " + notes);
  }
  lines.push("");
  lines.push(t("waThanks"));
  return lines.join("\n");
}

function toggleCartPanel(forceOpen) {
  const panel = document.getElementById("cartPanel");
  const floating = document.querySelector(".floating-ctas");
  const toggle = document.getElementById("cartToggle");
  if (!panel) return;

  const open = typeof forceOpen === "boolean"
    ? forceOpen
    : !panel.classList.contains("open");
  panel.classList.toggle("open", open);
  if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
  if (floating) floating.classList.toggle("is-hidden-during-cart", open);
}

let toastTimer = null;

function pulseCart() {
  const button = document.getElementById("cartToggle");
  if (!button) return;
  button.classList.remove("is-pulse");
  void button.offsetWidth;
  button.classList.add("is-pulse");
  window.setTimeout(() => button.classList.remove("is-pulse"), 650);
}

function showToast(message) {
  const toast = document.getElementById("cartToast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1600);
}

function cartRowHtml(entry) {
  const item = findItemById(entry.id);
  if (!item) return "";
  const quantity = entry.qty || 0;
  const lineTotal = item.price * quantity;
  const safeId = escapeHtml(item.id);
  const safeName = escapeHtml(localized(item.name));
  const safePrice = escapeHtml(formatPrice(item.price));
  const safeLineTotal = escapeHtml(formatPrice(lineTotal));
  const minusLabel = escapeHtml(t("subtractProduct", { name: localized(item.name) }));
  const plusLabel = escapeHtml(t("addProduct", { name: localized(item.name) }));

  return [
    '<div class="cart-row" data-cart-product-id="' + safeId + '">',
    '  <div class="cart-row-main">',
    '    <div class="cart-row-name">' + safeName + '</div>',
    '    <div class="cart-row-sub">' + quantity + " x " + safePrice + '</div>',
    '  </div>',
    '  <div class="cart-row-right">',
    '    <div class="cart-row-total">' + safeLineTotal + '</div>',
    '    <div class="cart-row-qty">',
    '      <button type="button" class="cart-mini-btn" data-cart-minus-id="' + safeId + '" aria-label="' + minusLabel + '">−</button>',
    '      <span class="cart-mini-val">' + quantity + '</span>',
    '      <button type="button" class="cart-mini-btn" data-cart-plus-id="' + safeId + '" aria-label="' + plusLabel + '">+</button>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join("");
}

function syncCartUI() {
  const count = cartCount();
  const cartToggle = document.getElementById("cartToggle");
  if (cartToggle) {
    const label = cartToggle.querySelector("[data-cart-toggle-label]");
    if (label) {
      const isMobile = window.matchMedia("(max-width: 480px)").matches;
      label.textContent = isMobile
        ? "(" + count + ")"
        : t("order") + (count > 0 ? " (" + count + ")" : "");
    }
    cartToggle.classList.toggle("has-items", count > 0);
  }

  const whatsappButton = document.getElementById("waCart");
  if (whatsappButton) {
    const label = whatsappButton.querySelector("[data-cart-send-label]");
    if (label) label.textContent = t("send") + " (" + count + ")";
    if (count === 0) {
      whatsappButton.classList.add("disabled");
      whatsappButton.href = "#";
      whatsappButton.setAttribute("aria-disabled", "true");
    } else {
      whatsappButton.classList.remove("disabled");
      whatsappButton.removeAttribute("aria-disabled");
      whatsappButton.href = waLink(buildCartMessage());
    }
  }

  document.querySelectorAll("[data-qty-id]").forEach((element) => {
    const entry = CART.get(element.getAttribute("data-qty-id") || "");
    element.textContent = String(entry ? entry.qty : 0);
  });

  const panel = document.getElementById("cartPanel");
  if (!panel) return;
  const list = panel.querySelector(".cart-list");
  const totalElement = panel.querySelector(".cart-total");
  const send = panel.querySelector("#cartSend");
  const clear = panel.querySelector("#cartClear");

  if (count === 0) {
    panel.classList.remove("open");
    panel.classList.add("empty");
    const floating = document.querySelector(".floating-ctas");
    if (floating) floating.classList.remove("is-hidden-during-cart");
    if (cartToggle) cartToggle.setAttribute("aria-expanded", "false");
    if (list) {
      list.replaceChildren();
      const empty = document.createElement("div");
      empty.className = "cart-empty";
      empty.textContent = t("cartEmpty");
      list.appendChild(empty);
    }
    if (totalElement) totalElement.textContent = t("total") + ": —";
    if (send) {
      send.classList.add("disabled");
      send.href = "#";
    }
    if (clear) clear.disabled = true;
    return;
  }

  panel.classList.remove("empty");
  if (list) list.innerHTML = Array.from(CART.values()).map(cartRowHtml).join("");
  if (totalElement) totalElement.textContent = t("totalApprox") + ": " + formatPrice(cartTotal());
  if (send) {
    send.classList.remove("disabled");
    send.href = waLink(buildCartMessage());
  }
  if (clear) clear.disabled = false;
}

function itemHtml(item, category) {
  const priceText = item.price == null ? "" : formatPrice(item.price);
  const name = localized(item.name);
  const safeId = escapeHtml(item.id);
  const safeName = escapeHtml(name);
  const safePrice = escapeHtml(priceText || "—");
  const safeSearch = escapeHtml(buildSearchIndex(item, category));
  const compact = Boolean(category.compact);
  const showIngredients = Boolean(category.showIngredients);
  const note = item.price == null ? t("pricePending") : t(category.noteKey);
  const isTop = !compact && FEATURED_SET.has(item.id);
  const topBadge = isTop ? '<span class="top-badge">' + escapeHtml(t("topChoice")) + '</span>' : "";
  const priceBadge = '<div class="item-price">' + safePrice + '</div>';

  let media = "";
  if (item.file) {
    media = [
      '<div class="item-media">',
      '  <img src="' + escapeHtml(IMG_BASE + item.file) + '" alt="' + safeName + '" class="item-img" loading="lazy" decoding="async" data-menu-image>',
      priceBadge,
      '</div>'
    ].join("");
  } else if (!compact) {
    media = [
      '<div class="item-media">',
      '  <div class="no-img">' + escapeHtml(t("noPhoto")) + '</div>',
      priceBadge,
      '</div>'
    ].join("");
  }

  const inlinePrice = compact ? '<span class="item-price-inline">' + safePrice + '</span>' : "";
  const minusLabel = escapeHtml(t("subtractProduct", { name: name }));
  const plusLabel = escapeHtml(t("addProduct", { name: name }));
  const ingredientsButton = showIngredients
    ? '<button class="mini-btn" type="button" data-ingredients-id="' + safeId + '" aria-haspopup="dialog">' + escapeHtml(t("ingredients")) + '</button>'
    : "";

  return [
    '<article class="item' + (compact ? " item--compact" : "") + '" data-product-id="' + safeId + '" data-search="' + safeSearch + '">',
    media,
    '<div class="item-body">',
    '  <div class="item-header-line">',
    '    <div class="item-name">' + safeName + '</div>',
    inlinePrice,
    '  </div>',
    !compact ? '<div class="top-badge-wrap">' + topBadge + '</div>' : "",
    !compact && note ? '<div class="item-note">' + escapeHtml(note) + '</div>' : "",
    '  <div class="item-actions">',
    '    <div class="qty-ctrl" aria-label="' + escapeHtml(t("quantity")) + '">',
    '      <button class="qty-btn" type="button" data-minus-id="' + safeId + '" aria-label="' + minusLabel + '">−</button>',
    '      <span class="qty-val" data-qty-id="' + safeId + '">0</span>',
    '      <button class="qty-btn" type="button" data-plus-id="' + safeId + '" aria-label="' + plusLabel + '">+</button>',
    '    </div>',
    ingredientsButton,
    '  </div>',
    '</div>',
    '</article>'
  ].join("");
}

function renderCategory(categoryId, container) {
  const category = CATEGORY_BY_ID.get(categoryId);
  if (!category || !container) return;
  container.innerHTML = category.items.map((item) => itemHtml(item, category)).join("");
}

function renderAll() {
  document.querySelectorAll(".items[data-category-id]").forEach((container) => {
    renderCategory(container.getAttribute("data-category-id"), container);
  });
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  grid.innerHTML = FEATURED.map((featured) => {
    const item = findItemById(featured.id);
    if (!item) return "";
    const name = localized(item.name);
    const safeName = escapeHtml(name);
    const safePrice = escapeHtml(formatPrice(item.price) || t("pricePending"));
    const safeTag = escapeHtml(localized(featured.tag));
    const media = item.file
      ? '<img src="' + escapeHtml(IMG_BASE + item.file) + '" alt="' + safeName + '" loading="lazy" decoding="async" data-menu-image>'
      : '<div class="no-img" style="height:100px;border-radius:0">' + escapeHtml(t("noPhoto")) + '</div>';

    return [
      '<a class="feat" href="' + escapeHtml(waForItem(item)) + '" target="_blank" rel="noopener" title="' + escapeHtml(t("orderProduct", { name: name })) + '" data-featured-id="' + escapeHtml(item.id) + '">',
      '  <div class="feat-media">',
      media,
      '    <div class="feat-price-badge">' + safePrice + '</div>',
      '  </div>',
      '  <div class="feat-body">',
      '    <div class="name">' + safeName + '</div>',
      '    <div class="meta"><div class="tag">' + safeTag + '</div></div>',
      '  </div>',
      '</a>'
    ].join("");
  }).join("");
}

function applyImageFallback(image) {
  if (!image || !image.matches("[data-menu-image]")) return;
  const fallback = document.createElement("div");
  fallback.className = "no-img";
  fallback.textContent = t("noPhoto");
  if (image.closest(".feat-media")) {
    fallback.style.height = "100px";
    fallback.style.borderRadius = "0";
  }
  image.replaceWith(fallback);
}

function setupImageFallbacks() {
  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement) applyImageFallback(event.target);
  }, true);
}

function setupWhatsAppButtons() {
  const hero = document.getElementById("waHero");
  if (hero) hero.href = waLink(t("waEmpty"));
}

function applySearchFilter() {
  const input = document.getElementById("q");
  if (!input) return;
  const term = normalizeSearch(input.value);
  document.querySelectorAll(".item").forEach((card) => {
    const haystack = card.getAttribute("data-search") || "";
    card.classList.toggle("hide", Boolean(term) && !haystack.includes(term));
  });

  document.querySelectorAll(".category").forEach((category) => {
    const visible = category.querySelectorAll(".item:not(.hide)").length;
    category.classList.toggle("hide", Boolean(term) && visible === 0);
  });

  const hero = document.querySelector(".hero");
  const featured = document.getElementById("destacados");
  if (hero) hero.classList.remove("hide");
  if (featured) featured.classList.remove("hide");
}

function setupSearch() {
  const input = document.getElementById("q");
  const clear = document.getElementById("clear");
  if (!input || !clear) return;
  input.addEventListener("input", applySearchFilter);
  clear.addEventListener("click", () => {
    input.value = "";
    applySearchFilter();
    input.focus();
  });
}

function setupCartSelection() {
  document.addEventListener("click", (event) => {
    const plus = event.target.closest("[data-plus-id]");
    const minus = event.target.closest("[data-minus-id]");
    if (!plus && !minus) return;
    event.preventDefault();

    if (plus) {
      const productId = plus.getAttribute("data-plus-id") || "";
      const item = findItemById(productId);
      incQty(productId, 1);
      pulseCart();
      if (item) showToast(t("productAdded", { name: localized(item.name) }));
      return;
    }
    incQty(minus.getAttribute("data-minus-id") || "", -1);
  });

  document.addEventListener("click", (event) => {
    const open = event.target.closest("#cartToggle");
    const close = event.target.closest("#cartClose");
    const clear = event.target.closest("#cartClear");
    const plus = event.target.closest("[data-cart-plus-id]");
    const minus = event.target.closest("[data-cart-minus-id]");

    if (open) {
      event.preventDefault();
      toggleCartPanel();
      return;
    }
    if (close) {
      event.preventDefault();
      toggleCartPanel(false);
      return;
    }
    if (clear) {
      event.preventDefault();
      CART.clear();
      const notes = document.getElementById("cartNotes");
      if (notes) notes.value = "";
      syncCartUI();
      return;
    }
    if (plus) {
      event.preventDefault();
      incQty(plus.getAttribute("data-cart-plus-id") || "", 1);
      return;
    }
    if (minus) {
      event.preventDefault();
      incQty(minus.getAttribute("data-cart-minus-id") || "", -1);
    }
  });

  const notes = document.getElementById("cartNotes");
  if (notes) notes.addEventListener("input", syncCartUI);
  window.addEventListener("resize", syncCartUI);
  syncCartUI();
}

let activeIngredientId = null;
let ingredientLastFocused = null;
let inertState = new Map();

function setBackgroundInert(inert) {
  const modal = document.getElementById("ingModal");
  const backdrop = document.getElementById("ingBackdrop");
  if (inert) inertState = new Map();
  Array.from(document.body.children).forEach((element) => {
    if (element === modal || element === backdrop) return;
    if (inert) {
      inertState.set(element, Boolean(element.inert));
      element.inert = true;
    } else if (inertState.has(element)) {
      element.inert = inertState.get(element);
    }
  });
  if (!inert) inertState.clear();
}

function renderIngredientModal(productId) {
  const item = findItemById(productId);
  const title = document.getElementById("ingTitle");
  const body = document.getElementById("ingBody");
  const whatsapp = document.getElementById("ingWa");
  if (!item || !title || !body || !whatsapp) return;

  const name = localized(item.name);
  title.textContent = t("ingredientsTitle", { name: name });
  body.replaceChildren();

  const ingredients = Array.isArray(item.ingredients[currentLang])
    ? item.ingredients[currentLang].filter(Boolean)
    : [];

  if (!ingredients.length) {
    const pending = document.createElement("p");
    pending.textContent = t("ingredientsPending");
    body.appendChild(pending);
  } else {
    const label = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = item.ingredientStatus === "confirmed"
      ? t("ingredientsConfirmed")
      : item.ingredientStatus === "needs_kitchen_confirmation"
        ? t("ingredientsTypical")
        : t("ingredientsReference");
    label.appendChild(strong);
    body.appendChild(label);

    const list = document.createElement("ul");
    list.className = "ingredients-list";
    for (const ingredient of ingredients) {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      list.appendChild(listItem);
    }
    body.appendChild(list);

    if (item.ingredientStatus !== "confirmed") {
      const warning = document.createElement("p");
      warning.className = "ingredients-warning";
      warning.textContent = item.ingredientStatus === "needs_kitchen_confirmation"
        ? t("ingredientsTypicalWarning")
        : t("ingredientsReferenceWarning");
      body.appendChild(warning);
    }
  }

  whatsapp.textContent = t("ingredientsButton");
  whatsapp.href = waLink(t("waIngredients", { name: name }));
}

function setupIngredientsModal() {
  const modal = document.getElementById("ingModal");
  const backdrop = document.getElementById("ingBackdrop");
  const closeButton = document.getElementById("ingClose");
  if (!modal || !backdrop || !closeButton) return;

  const focusableElements = () => Array.from(
    modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
  ).filter((element) => !element.hidden);

  const close = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    backdrop.hidden = true;
    activeIngredientId = null;
    document.body.classList.remove("ingredients-open");
    setBackgroundInert(false);
    document.removeEventListener("keydown", onKeyDown);
    if (ingredientLastFocused && typeof ingredientLastFocused.focus === "function") {
      ingredientLastFocused.focus({ preventScroll: true });
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = focusableElements();
    if (focusable.length === 0) {
      event.preventDefault();
      modal.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const open = (productId, trigger) => {
    const item = findItemById(productId);
    const category = PRODUCT_CATEGORY_BY_ID.get(productId);
    if (!item || !category || !category.showIngredients) return;
    ingredientLastFocused = trigger || document.activeElement;
    activeIngredientId = productId;
    renderIngredientModal(productId);
    modal.hidden = false;
    backdrop.hidden = false;
    document.body.classList.add("ingredients-open");
    setBackgroundInert(true);
    document.addEventListener("keydown", onKeyDown);
    closeButton.focus({ preventScroll: true });
  };

  backdrop.addEventListener("click", close);
  closeButton.addEventListener("click", close);
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-ingredients-id]");
    if (!trigger) return;
    event.preventDefault();
    open(trigger.getAttribute("data-ingredients-id"), trigger);
  });
}

function updateCategoryButton() {
  const menu = document.getElementById("catMenu");
  const button = document.getElementById("catFloat");
  if (!menu || !button) return;
  const open = !menu.hidden;
  button.textContent = t(open ? "categoriesOpen" : "categoriesClosed");
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.setAttribute("aria-label", t(open ? "closeCategoriesAria" : "openCategoriesAria"));
}

function setupCategoriesMenu() {
  const menu = document.getElementById("catMenu");
  const button = document.getElementById("catFloat");
  if (!menu || !button) return;
  let backdrop = null;

  const closeMenu = () => {
    menu.hidden = true;
    if (backdrop) {
      backdrop.hidden = true;
      backdrop.classList.add("hide");
    }
    updateCategoryButton();
    document.removeEventListener("keydown", onKeyDown);
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu();
      button.focus({ preventScroll: true });
    }
  };

  const openMenu = () => {
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "catmenu-backdrop";
      backdrop.addEventListener("click", closeMenu);
      document.body.appendChild(backdrop);
    }
    backdrop.classList.remove("hide");
    backdrop.hidden = false;
    menu.hidden = false;
    updateCategoryButton();
    document.addEventListener("keydown", onKeyDown);
    const firstLink = menu.querySelector("a");
    if (firstLink) firstLink.focus({ preventScroll: true });
  };

  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  menu.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.getAttribute("href").slice(1));
    closeMenu();
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  updateCategoryButton();
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t("documentTitle");

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.setAttribute("content", t("metaDescription"));
  if (ogTitle) ogTitle.setAttribute("content", t("ogTitle"));
  if (ogDescription) ogDescription.setAttribute("content", t("ogDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.getAttribute("data-i18n-aria")));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.getAttribute("data-i18n-placeholder")));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.getAttribute("data-i18n-title")));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.getAttribute("data-lang") === currentLang;
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  updateCategoryButton();
}

function updateLanguageUrl(language) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
}

function applyLanguage(language, options) {
  const normalized = normalizeLanguage(language);
  if (!normalized) return false;
  const settings = Object.assign({
    persist: true,
    updateUrl: true,
    restoreScroll: true
  }, options || {});
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  currentLang = normalized;
  if (settings.persist) saveLanguage(normalized);
  if (settings.updateUrl) updateLanguageUrl(normalized);

  applyStaticTranslations();
  renderAll();
  renderFeatured();
  setupWhatsAppButtons();
  syncCartUI();
  applySearchFilter();
  if (activeIngredientId) renderIngredientModal(activeIngredientId);

  const toast = document.getElementById("cartToast");
  if (toast) toast.classList.remove("show");
  if (settings.restoreScroll) {
    window.requestAnimationFrame(() => window.scrollTo(scrollX, scrollY));
  }
  return true;
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });
}

function initMenu() {
  setupImageFallbacks();
  setupLanguageSwitcher();
  setupCartSelection();
  setupSearch();
  setupIngredientsModal();
  setupCategoriesMenu();

  const queryLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get("lang"));
  applyLanguage(currentLang, {
    persist: Boolean(queryLanguage),
    updateUrl: false,
    restoreScroll: false
  });
}

window.FlorestaMenu = Object.freeze({
  resolveLanguage: resolveLanguage,
  normalizeSearch: normalizeSearch,
  getLanguage: () => currentLang,
  getCatalog: () => MENU,
  getCart: () => new Map(CART),
  setQuantity: setQty,
  incrementQuantity: incQty,
  getCartTotal: cartTotal,
  getCartMessage: buildCartMessage,
  setLanguage: applyLanguage,
  applySearch: applySearchFilter
});

initMenu();
