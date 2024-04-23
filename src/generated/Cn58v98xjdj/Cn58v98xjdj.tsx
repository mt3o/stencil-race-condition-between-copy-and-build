
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-n58v98xjdj',
  shadow: true,
})
export class Cn58v98xjdj {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  