import Card from "./Card.vue";
import { render } from "@testing-library/vue";

const factoryMember = (avatar_url: string, login: string) => ({
  avatar_url,
  login,
});

describe("Card", () => {
  it("renders the card name", () => {
    const { getByText } = render(Card, {
      props: { member: factoryMember("fake_url", "Paco") },
    });

    getByText("Paco");
  });

  it("renders the card img", () => {
    const { getByRole, getByAltText } = render(Card, {
      props: { member: factoryMember("fake_url", "Paco") },
    });
    expect(getByRole("img").getAttribute("src")).toEqual("fake_url");
    getByAltText("Paco");
  });
});
