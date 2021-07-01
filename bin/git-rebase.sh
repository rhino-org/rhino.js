#!/bin/bash
# Adicione um novo remote; pode chamá-lo de "upstream":
git remote add oficial https://github.com/rhino-org/rhino.js.git

# Obtenha todos os branches deste novo remote,
# como o upstream/master por exemplo:

git fetch oficial

# Certifique-se de que você está no branch master:

git checkout main

# Reescreva o seu branch master, de forma que os seus commits
# que não estão no projeto original apareçam, e que os seus
# commits fiquem no topo da lista:

git rebase oficial/main

# No entanto, para fazer com que futuros pull requests fiquem o mais
# limpos possível, é uma boa ideia fazer o rebase.

# Se você fez o rebase do seu branch a partir de upstream/master, talvez
# você precise forçar um push para o seu próprio repositório do Github.
# Você pode fazer isso com:

git push -f origin main