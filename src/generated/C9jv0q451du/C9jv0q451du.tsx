
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-9jv0q451du',
  shadow: true,
})
export class C9jv0q451du {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  