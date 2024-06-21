import gql from 'graphql-tag';
export const MenuItemDefaultFragmentDoc = gql`
    fragment MenuItemDefault on Menu_item_Default {
  externalLink
  externalUrl
  newTab
  referenceToPage {
    route
  }
  icon {
    name
    right
  }
}
    `;
export const MenuItemExpandableFragmentDoc = gql`
    fragment MenuItemExpandable on Menu_item_Expandable {
  icon {
    name
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
    icon {
      library
      type
      corners
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
export const GetMenuItemDocument = gql`
    query GetMenuItem($id: Int!) {
  Menu_item(id: $id) {
    title
    template
    default {
      ...MenuItemDefault
    }
    expandable {
      ...MenuItemExpandable
    }
  }
}
    ${MenuItemDefaultFragmentDoc}
${MenuItemExpandableFragmentDoc}`;
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
      id
    }
  }
}
    ${ImageFragmentDoc}`;
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