import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;
  const text = message.toLowerCase();

  let reply = "";

  // 📘 DEFINITIONS
  if (text.includes("what is waste")) {
    reply = "Waste is any unwanted or unusable material that is discarded after use. It can be solid, liquid, or gas.";
  }

  else if (text.includes("what is waste management")) {
    reply = "Waste management is the process of collection, segregation, recycling, and disposal of waste in a safe and efficient manner.";
  }

  else if (text.includes("what is plastic")) {
    reply = "Plastic is a synthetic polymer material that is durable and lightweight but harmful to the environment if not properly managed.";
  }

  // ❓ WHY / IMPORTANCE
  else if (text.includes("why") && text.includes("waste")) {
    reply = "Waste management is important because:\n\n• It reduces pollution\n• Protects human health\n• Conserves natural resources\n• Maintains environmental balance";
  }

  else if (text.includes("importance of waste management")) {
    reply = "Importance of waste management:\n\n• Reduces environmental pollution\n• Saves resources\n• Improves public health\n• Supports sustainable development";
  }

  // 📂 TYPES
  else if (text.includes("types of waste")) {
    reply = "Types of waste:\n\n• Solid waste (plastic, paper)\n• Liquid waste (sewage)\n• Organic waste (food)\n• Hazardous waste (chemicals)";
  }

  else if (text.includes("biodegradable")) {
    reply = "Biodegradable waste can be decomposed naturally by microorganisms (e.g., food waste, paper).";
  }

  else if (text.includes("non biodegradable")) {
    reply = "Non-biodegradable waste does not decompose easily (e.g., plastic, glass, metals).";
  }

  else if (text.includes("difference") && text.includes("biodegradable")) {
    reply = "Difference:\n\nBiodegradable: decomposes naturally (food, paper)\nNon-biodegradable: does not decompose easily (plastic, metal)";
  }

  // 🌍 EFFECTS
  else if (text.includes("effects") || text.includes("impact")) {
    reply = "Effects of improper waste management:\n\n• Air, water, and soil pollution\n• Spread of diseases\n• Harm to wildlife\n• Environmental degradation";
  }

  // ♻️ METHODS
  else if (text.includes("recycling")) {
    reply = "Recycling is the process of converting waste into reusable material to reduce pollution and conserve resources.";
  }

  else if (text.includes("compost")) {
    reply = "Composting converts organic waste into nutrient-rich fertilizer using natural processes.";
  }

  else if (text.includes("landfill")) {
    reply = "Landfills are places where waste is buried. They can cause environmental problems like soil and groundwater pollution.";
  }

  else if (text.includes("incineration")) {
    reply = "Incineration is the burning of waste at high temperatures to reduce its volume, but it may cause air pollution.";
  }

  // 🧠 3R PRINCIPLE
  else if (text.includes("3r") || text.includes("reduce reuse recycle")) {
    reply = "3R Principle:\n\n• Reduce: minimize waste\n• Reuse: use items again\n• Recycle: convert waste into new products";
  }

  // 🏛️ INDIAN LAWS
  else if (text.includes("laws") || text.includes("rules") || text.includes("act") || text.includes("india")) {
    reply = "Major Waste Management Laws in India:\n\n• Solid Waste Management Rules, 2016\n• Plastic Waste Management Rules, 2016\n• E-Waste Management Rules, 2016\n• Biomedical Waste Management Rules, 2016\n\nThese laws ensure proper segregation, recycling, and disposal.";
  }

  else if (text.includes("solid waste management rules")) {
    reply = "Solid Waste Management Rules, 2016:\n\n• Mandatory waste segregation\n• Door-to-door collection\n• Scientific disposal methods\n• Responsibility of local authorities";
  }

  else if (text.includes("plastic waste management")) {
    reply = "Plastic Waste Management Rules, 2016:\n\n• Ban on certain single-use plastics\n• Extended Producer Responsibility (EPR)\n• Recycling requirements";
  }

  else if (text.includes("e waste")) {
    reply = "E-Waste Management Rules, 2016:\n\n• Proper disposal of electronic waste\n• Producer responsibility\n• Recycling of electronic items";
  }

  else if (text.includes("biomedical")) {
    reply = "Biomedical Waste Management Rules, 2016:\n\n• Safe disposal of medical waste\n• Prevents infections\n• Color-coded waste segregation";
  }

  // 🌱 GOVERNMENT INITIATIVES
  else if (text.includes("swachh bharat")) {
    reply = "Swachh Bharat Mission is a national campaign launched to promote cleanliness and proper waste management across India.";
  }

  // 👨‍⚖️ RESPONSIBILITY
  else if (text.includes("responsibility") || text.includes("duty")) {
    reply = "Responsibilities of citizens:\n\n• Segregate waste\n• Avoid littering\n• Follow recycling practices\n• Support environmental initiatives";
  }

  // 🎓 ADVANTAGES / DISADVANTAGES
  else if (text.includes("advantages")) {
    reply = "Advantages:\n\n• Reduces pollution\n• Saves resources\n• Improves health\n• Supports sustainability";
  }

  else if (text.includes("disadvantages")) {
    reply = "Disadvantages of poor waste management:\n\n• Pollution\n• Health hazards\n• Environmental damage";
  }

  // 👋 GREETING
  else if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello 👋 I am Bhumi AI. Ask me academic or law-related questions about waste management!";
  }

  // ❌ OUT OF SCOPE
  else {
    reply = "⚠️ I can only answer questions related to waste management, environment, and Indian waste laws.";
  }

  res.json({ reply });
});

export default router;