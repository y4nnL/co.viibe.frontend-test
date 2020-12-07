export function initials(user: { firstName: string, lastName: string }) {
  return [ user.firstName, user.lastName ].map((word) => word[0].toUpperCase())
    .join('')
}

export function name(user: { firstName: string, lastName: string }) {
  return user.firstName + ' ' + user.lastName.toUpperCase()
}
