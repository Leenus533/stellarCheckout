import {
  reactExtension,
  Banner,
  BlockStack,
  useInstructions,
  useTranslate,
  Button,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.payment-method-list.render-before",
  () => <Extension />
);

function Extension() {
  const translate = useTranslate();
  const instructions = useInstructions();

  if (!instructions.attributes.canUpdateAttributes) {
    return (
      <Banner title="stellarCheckout" status="warning">
        {translate("attributeChangesAreNotSupported")}
      </Banner>
    );
  }

  return (
    <BlockStack border="dotted" padding="tight">
      <Button
        onPress={() => {
          // Unable to complete due to restrictions and limitations applied by Shopify.
          // Will need to get approved by shopify as a payment provider to work with there payment's
        }}
      >
        Pay with Stellar
      </Button>
    </BlockStack>
  );
}
