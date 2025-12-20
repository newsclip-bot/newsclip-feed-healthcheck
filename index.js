const NEWSCLIP = {
  home: "https://newsclip.com/",
  general: "https://newsclip.com/general/",
  entertainment: "https://newsclip.com/entertainment/",
  editorial: "https://newsclip.com/editorial/",
  business: "https://newsclip.com/business/",
  sports: "https://newsclip.com/sports/",
  team: "https://newsclip.com/team/",
  privacy: "https://newsclip.com/privacy/",
  terms: "https://newsclip.com/terms/"
};

function routeTopic(topic) {
  const t = (topic || "").toLowerCase();

  if (t.includes("sport") || t.includes("nba") || t.includes("nfl") || t.includes("mlb")) return NEWSCLIP.sports;
  if (t.includes("biz") || t.includes("market") || t.includes("finance") || t.includes("earnings")) return NEWSCLIP.business;
  if (t.includes("movie") || t.includes("music") || t.includes("celebrity")) return NEWSCLIP.entertainment;
  if (t.includes("opinion") || t.includes("editorial")) return NEWSCLIP.editorial;
  if (t.includes("privacy")) return NEWSCLIP.privacy;
  if (t.includes("terms")) return NEWSCLIP.terms;
  if (t.includes("team") || t.includes("about")) return NEWSCLIP.team;

  return NEWSCLIP.general;
}

function main() {
  const topic = process.argv[2] || "general";
  const url = routeTopic(topic);
  console.log(JSON.stringify({ topic, url }, null, 2));
}

main();
