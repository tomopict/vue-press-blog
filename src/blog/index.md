### Vue Press+ netrify でBlogをはじめる

今年の初めにアウトプットをせねばならないなーと
ひとしきり考えた結論として、ブログやQiitaへの投稿を絶対にやろうと考えていた。

それから色々あって気付いたら師走です。

という事で今年が終わるまでになんとか形にしてやろうと思って
やっと始めました。

まずはblogサービスを始めるならなにかなーと思ったんですが
Qiitaは技術関連しか書いてはダメそうだし、
noteはまだデザインよりのイメージがあって、
どれにするかを決め切れずにいたところ以下の記事を発見して
どうせだから勉強がてら自分で作ってみようかと思い、手を出して見ました。

以下本題

---

#### モチベーションに関して
こういうのって結局やりたいときに一気にどこまで進められるか
初速が大きいと思っていて、その意味でもまず今自分が持っているスキルセットで
組みやすい部分プラスαくらいのところでいいものがないか考えたのがきっかけ。

その時にQiitaなどでちらほらVuePressという名前を見かけて
自分で業務でも使っているしこれならサクッといけるんじゃねと思ったのがつい先週。

#### 主な選択理由

+ 自分が業務でVueを触っていることもあり、他のサービスより障壁低いと踏んだ
+ モチベーションが熱いうちにサクッとやりたいので今のスキルセットから近いものを選んだ

#### ここから実装

#### インストール方法
今回はglobalではなくて特定のディレクトリ内で試すつもりだったので、ローカルでインストールします。

``` js{4}
yarn add -D vuepress # OR npm install -D vuepress
```



| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::s

::: danger STOP
Danger zone, do not proceed
:::


#### code 
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### component

<modal/>

{{ 1 + 1 }}

{{ $page }}