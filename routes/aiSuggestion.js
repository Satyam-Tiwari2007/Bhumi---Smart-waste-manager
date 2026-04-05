import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { description } = req.body;
  const text = description.toLowerCase();

  let suggestion = "♻️ Reuse creatively at home";

  // Plastic items
  if (text.includes("plastic bottle")) {
    suggestion = "💡 Pen stand\n🌱 Flower pot\n💧 Drip irrigation\n🕯️ Decorative lights";
  } else if (text.includes("plastic bucket")) {
    suggestion = "🪴 Large planter\n🧺 Storage basket\n🚿 Bathroom organizer";
  } else if (text.includes("plastic chair")) {
    suggestion = "🪴 Garden chair\n🎨 Paint and reuse\n🛠️ Repair for balcony use";
  } else if (text.includes("plastic mug")) {
    suggestion = "🖊️ Pen holder\n🌱 Plant pot\n🧼 Bathroom organizer";
  } else if (text.includes("plastic spoon")) {
    suggestion = "🎨 Wall art craft\n🌸 Decorative flowers\n🧩 Kids DIY project";
  } else if (text.includes("plastic plate")) {
    suggestion = "🎨 Wall decoration\n🧩 DIY toy wheel\n🕯️ Candle base";
  } else if (text.includes("plastic box")) {
    suggestion = "📦 Storage organizer\n💍 Jewelry box\n🔌 Cable holder";
  } else if (text.includes("plastic thread")) {
    suggestion = "🪢 Rope craft\n🎀 Decorative hanging\n🪴 Plant support ties";
  }

  // Glass
  else if (text.includes("glass bottle")) {
    suggestion = "🌸 Flower vase\n🕯️ Lamp decoration\n🌿 Plant cuttings holder";
  } else if (text.includes("glass jar")) {
    suggestion = "🍪 Kitchen storage\n🕯️ Candle jar\n🌱 Terrarium";
  }

  // Paper / cardboard
  else if (text.includes("paper")) {
    suggestion = "📒 Rough notebook\n🎨 Paper craft\n🎁 Gift wrapping";
  } else if (text.includes("cardboard")) {
    suggestion = "📦 Storage box\n🚗 Kids toy car\n🖼️ DIY photo frame";
  } else if (text.includes("newspaper")) {
    suggestion = "🧺 Paper basket\n🎁 Wrapping paper\n🪴 Seed starter pots";
  }

  // Metal / cans
  else if (text.includes("tin can")) {
    suggestion = "🌱 Plant pot\n✏️ Pen holder\n🕯️ Candle stand";
  } else if (text.includes("aluminium can")) {
    suggestion = "🌸 Decorative flower\n🖊️ Pencil stand\n💡 Mini lamp";
  }

  // Wood
  else if (text.includes("wood block")) {
    suggestion = "📱 Mobile stand\n🖼️ Photo frame\n🪴 Plant holder\n📚 Book support";
  } else if (text.includes("wood plank")) {
    suggestion = "🪑 Small stool\n📚 Wall shelf\n🖼️ Wooden decor";
  } else if (text.includes("wood stick")) {
    suggestion = "🌱 Plant support\n🎨 Craft project\n🏠 Mini house model";
  }

  // Cloth / fabric
  else if (text.includes("cloth")) {
    suggestion = "👜 Shopping bag\n🛏️ Cushion cover\n🧹 Cleaning cloth";
  } else if (text.includes("old jeans")) {
    suggestion = "👜 Denim bag\n📒 Book cover\n🪴 Plant holder";
  } else if (text.includes("shirt")) {
    suggestion = "👕 Cleaning cloth\n👜 Tote bag\n🛏️ Pillow cover";
  } else if (text.includes("thread")) {
    suggestion = "🧶 Bracelet\n🎀 Decoration craft\n🪢 Hanging decor";
  }

  // Food waste
  else if (text.includes("food")) {
    suggestion = "🌱 Compost fertilizer\n🐄 Animal feed\n🪴 Organic manure";
  } else if (text.includes("vegetable peel")) {
    suggestion = "🌱 Compost\n🥬 Plant fertilizer tea\n🐓 Animal feed";
  } else if (text.includes("fruit peel")) {
    suggestion = "🌱 Compost\n🍊 Natural cleaner\n🪴 Fertilizer";
  }

  // E-waste
  else if (text.includes("old mobile")) {
    suggestion = "📷 Use as CCTV camera\n🎵 Music player\n📚 Learning device";
  } else if (text.includes("keyboard")) {
    suggestion = "⌨️ Keycap art\n🖼️ Wall decor\n🎮 DIY game buttons";
  } else if (text.includes("mouse")) {
    suggestion = "🎨 Desk decoration\n🧩 Robotics DIY use";
  }

  // Rubber
  else if (text.includes("tyre")) {
    suggestion = "🪴 Garden planter\n🪑 Outdoor seat\n🤸 Playground swing";
  }

  // Misc common waste
  else if (text.includes("bucket")) {
    suggestion = "🪴 Big flower pot\n🧺 Storage bin\n🧽 Bathroom use";
  } else if (text.includes("chair")) {
    suggestion = "🎨 Repaint and reuse\n🪴 Balcony seating";
  } else if (text.includes("shoe")) {
    suggestion = "🪴 Shoe planter\n🎨 Garden decor";
  } else if (text.includes("bottle cap")) {
    suggestion = "🎨 Wall art\n🧲 Fridge magnet\n🧩 Kids craft";
  } else if (text.includes("rope")) {
    suggestion = "🪢 Hanging decor\n🪴 Plant holder\n🎀 DIY wall art";
  }

  res.json({ suggestion });
});

export default router;