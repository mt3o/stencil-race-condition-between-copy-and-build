
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-yqh26f2wqv',
  shadow: true,
})
export class Cyqh26f2wqv {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  