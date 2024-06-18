import gql from 'graphql-tag';
export const MenuItemFragmentDoc = gql`
    fragment MenuItem on MenuItem {
  __typename
  id
  title
  description
  icon
  externalUrl
  referenceToPage {
    id
  }
  children {
    id
  }
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on Image {
  id
  description
  width
  height
  blurhash
  sizes {
    xs {
      url
      width
    }
    sm {
      url
      width
    }
    md {
      url
      width
    }
    lg {
      url
      width
    }
    xl {
      url
      width
    }
    xxl {
      url
      width
    }
    xxxl {
      url
      width
    }
    opengraph {
      url
      width
    }
  }
}
    `;
export const PageFragmentDoc = gql`
    fragment Page on Page {
  id
  meta {
    description
    image {
      ...Image
    }
    title
  }
  template
}
    ${ImageFragmentDoc}`;
export const GetGlobalsDocument = gql`
    query GetGlobals {
  Settings {
    meta {
      title
      description
      image {
        ...Image
      }
    }
  }
}
    ${ImageFragmentDoc}`;
export const GetImageDocument = gql`
    query GetImage($id: String!) {
  Image(id: $id) {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const GetNavigationMenuDocument = gql`
    query GetNavigationMenu {
  NavigationMenu {
    logo {
      ...Image
    }
    alternateLogo {
      ...Image
    }
    routes {
      ...MenuItem
    }
  }
}
    ${ImageFragmentDoc}
${MenuItemFragmentDoc}`;
export const GetPageDocument = gql`
    query GetPage($template: Page_template_Input) {
  Pages(where: {template: {equals: $template}}) {
    docs {
      ...Page
      title
      template
      route
      homeFields {
        isPage
      }
    }
  }
}
    ${PageFragmentDoc}`;