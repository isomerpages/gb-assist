const customTables = [
  {
    path: "/start-a-business/open-a-corporate-bank-account/",
    columns: ["32%", "auto"],
  },
  {
    path: "/contact-us/",
    columns: ["32%", "auto"],
  }, 
  {
    path: "/timelimitedrrt/",
    columns: ["32%", "auto"],
  }, 
  {
    path: "/covid-19-faqs/time-limited-rrt-for-workplaces",
    columns: ["32%", "auto"],
  },
  {
    path: "/covid-19-faqs/workplace-safe-management-measures",
    columns: ["32%", "auto"],
  },
  {
    path: "/licences/find-licence-by-agency/",
    columns: ["auto", "200px"],
  },
  {
    path: "/licensing-faqs/food-shop-licence/",
    columns: ["12%", "70%", "auto"],
  },
  {
    path: "/licensing-faqs/food-stall-licence/",
    columns: ["12%", "70%", "auto"],
  },
  {
    path: "/covid-19-faqs/for-sector-specific-queries/marriage-solemnizations-and-receptions",
    columns: ["50%", "50%"],
  },
  {
    path: "/productivity-solutions-grant/",
    columns: ["20%", "auto"]
  },
  {
    path: "/browse-all-solutions-Advanced-Manufacturing/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Banks/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Building-Construction/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Cyber-Security-solutions/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Digital-Marketing-solutions/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Document-Management-and-Mobile-Access-System/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Early-Childhood/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-E-Commerce-solutions/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Engineering-Services/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-ERP-and-Standalone-solutions/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Estate-Agency/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Fleet-Safety-and-Fleet-Management-System/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Food/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Food-Services/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Healthcare/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Human-Resource-Solutions/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Logistics/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Marine-Offshore/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Personal-Care-Services/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Precision-Engineering/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Retail/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Security/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Travel-Agents/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/browse-all-solutions-Wholesale-Trade/*",
    columns: ["50%", "50%"]
  },
  {
    path: "/productivity-solutions-grant/solutionrepo/*",
    columns: ["10%", "auto", "20%", "10%", "10%"]
  }
];

$(document).ready(function () {
  const path = $(location).attr("pathname");
  const { columns } = customTables.find(ct => ct.path === path);
  columns.forEach((c, i) => {
    $("table>thead>tr>th:nth-child(" + (i + 1)).css("width", c);
    $("table>tbody>tr>td:nth-child(" + (i + 1)).css("width", c);
  });
});
