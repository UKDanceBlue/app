import { View } from "react-native";

import { Text } from "@/components/ui/text";

const Breadcrumbs = ({
  pageName,
  includeBreadcrumbs,
  previousPage,
}: {
  pageName: string;
  includeBreadcrumbs: boolean;
  previousPage: string;
}) => {
  function ReturnElement() {
    if (includeBreadcrumbs) {
      return (
        <View>
          <Text
            className="ml-3 text-lg"
            style={{ fontFamily: "monospace" }}
          >{`< ${previousPage}`}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  return (
    <View>
      <Text
        bold
        className="bg-primary-700 text-center text-lg color-primary-400"
      >
        {pageName}
      </Text>

      {ReturnElement()}
    </View>
  );
};
export default Breadcrumbs;
