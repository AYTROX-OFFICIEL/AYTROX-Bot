//* Clear.js */

module.exports = {
  run: async (message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      const count = args[0]
      if (!/\d+/.test(count)) return message.channel.send('Veuillez indiquer un nombre de message à supprimer.')
      if (count < 1 || count > 99) return message.channel.send('Le nombre de message doit être compris entre 1 et 99!')
      const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
      message.member.send(`J'ai supprimé \`${size - 1}\` message(s) !`)
  }
}
