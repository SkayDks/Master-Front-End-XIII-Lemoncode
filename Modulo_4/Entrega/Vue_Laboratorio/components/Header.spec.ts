import Card from "./Card.vue";
import { render } from "@testing-library/vue";

const factoryOrg = (avatar_url: string, login: string) => ({
  avatar_url,
  login,
});

describe("Header", () => {
  it("renders the header name", () => {
    const { getByText } = render(Card, {
      props: { member: factoryOrg("fake_url", "Lemooncode") },
    });

    getByText("Lemooncode");
  });

  it("renders the header img", () => {
    const { getByRole, getByAltText } = render(Card, {
      props: { member: factoryOrg("fake_url", "Lemooncode") },
    });
    expect(getByRole("img").getAttribute("src")).toEqual("fake_url");
    getByAltText("Lemooncode");
  });
});
