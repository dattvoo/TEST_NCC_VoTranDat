import React from "react";
import "./style.css";
export const Content = () => {
  const listItem = [
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      link_img:
        "https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1676851200&Signature=cubLJhvuNQQk4pt-w1fJyAs3-VE3YDJIny7~qlwXpbvaAJ~sLP2n2uyYyI0ki7Cfnh3H8CEAM00RWJqgbBXCy4vIpSX146oRmDCITfDN4Wn0z1zw~2bfonaObSrUJXoRyKcFx47kAd0j5XgD05VvJnFnV~kh7Y9ryTkFVuSiyfZLBeJaTRsJVr~WvW4eHXiPGJmN1hr5UkQQDLT-xAJHMO43w5Fu~bytvtt0lvL8ynKmqS-uwx5pK4CRuggK6KtfkvrmlYoUoSFCGLs8E5Mq0RRe55ufECll3y5XrJO6KdOVVlFS8Y25itN~HvB-323jWmAqzIM1gP1ZsnHsf~4bLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      link_img:
        "https://s3-alpha-sig.figma.com/img/2283/e203/66ceb1e8d5d276758ee00c3663bae8e9?Expires=1676851200&Signature=gX0fev8aXZd4w2f29LtokhXOYLkr4ZgiHI85-iUkkCt328a0COYBx4uHxD1GHm7iY6Wj-ap~zqjpOQ7dcGJpV9ycf6I7xhEfgursxg47JJiPQsBQTLhZgIYd90Xdsg3e3C6vUwFt3hv2ytGccOKk9kxDUEvWN~UIc7h4tXxYGXH9-wdeTg4dZrUzyJD1F~TDdVJufSRXngjnv5LM0YlyqdAVCfUB~OM7fjoSJfKs2Jev8L6gD-XyPYUt~gK1uCO2zV-QPUdWhYZR1yKQnfGjBtaqXvjQY3fbYu-i4MGzpmHsVErx8f1WVdU6AcHo3IpoZqxGYhMm3lb3dGOSu15aGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      link_img:
        "https://s3-alpha-sig.figma.com/img/c9c3/230b/112f1704f67d2cb7c852b396cde6858e?Expires=1676851200&Signature=IyrKzGBWgvsmlb5uE-Ln5FEems2Dpq97m1-ZNKY1szTJR2LX-zuSLFrA1XEV-oNeyXpmpafT5KukF6VtBf8-nPH9Onb0Pwg4MZKmQpmkC5rIvB4Aej2MywdIPEHiclQOnx5RdUDJ2wt5RwCjlGW2ExD3XtxmjQHmXklMJt-0G7QQ-xJSijW~P9V4eCNF2oxkpkEFlzTuH8g6L9yzf59TwPKlRWAUD68O1dGd0U3fJ9R2UnM594kAl~m0XSXiNgCRvJXKCCwmiueQBerkXdPQUf2tmLhXRTPLvO1PUbZmCqQ7AowhknjNHk-8eJAFJ09rlXvAnwlOJgOaUJHmBqAGOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <div className="content">
      <div className="row listItem">
        {listItem.map((item, index) => (
          <div className="col-3">
            <div className="item">
              <div className="title">
                <h2>{item.title}</h2>
              </div>

              <div className="body">
                <div className="item_img">
                  <img src={item.link_img} alt="images" />
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
