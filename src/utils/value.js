/*
    計算值'大於0'和'小於0'顯示顏色
*/

export function getValueColor(val) {
  let color = "text-black";
  if (val > 0) {
    color = "text-green-500";
  } else if (val < 0) {
    color = "text-red-600";
  }
  return color;
}

// header title name

export function getHeaderTitle(val) {
  let title = "";
  switch (val) {
    case "masterSort":
      title = "高手排行";
      break;
    case "sportGrid":
      title = "現貨網格";
      break;
    case "contractTrade":
      title = "合約交易";
      break;
    case "friendList":
      title = "好友列表";
      break;
    case "wallet":
      title = "我的錢包";
      break;
    case "memberInfo":
      title = "會員資訊";
      break;
  }
  return title;
}
